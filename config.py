import boto3
import requests
from botocore.exceptions import ClientError

def create_presigned_url(bucket_name, object_name, expiration=3600):
    """Generate a presigned URL to share an S3 object

    Sharing an S3 object is the intended use of S3 presigned URLs. The AWS
    Python SDK also supports generating a presigned URL to perform other S3
    operations. See the create_presigned_url_expanded() method in this file.

    :param bucket_name: string
    :param object_name: string
    :param expiration: Time in seconds for the presigned URL to remain valid
    :return: Presigned URL as string. If error, returns None.
    """
    # Generate a presigned URL for the S3 object
    s3_client = boto3.client('s3')
    try:
        response = s3_client.generate_presigned_url('get_object',
                                                    Params={'Bucket': bucket_name,
                                                            'Key': object_name},
                                                    ExpiresIn=expiration)
    except ClientError as e:
        logging.error(e)
        return None

    # The response contains the presigned URL
    return response

def get_json(url):
    r = requests.get(url)
    data = r.json()
    return data["googleApiKey"]

def main():
    bucket_name = 'animaltrackr'
    object_name = 'config.json'

    url = create_presigned_url(bucket_name, object_name)

    with open('.env', 'w') as env:
        env.write("REACT_APP_GOOGLE_API_KEY={key}".format(key=get_json(url)))

if __name__ == '__main__':
    main()