--- 
title: delivery_streams
hide_title: false
hide_table_of_contents: false
keywords:
  - delivery_streams
  - firehose
  - aws
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage aws resources using SQL
custom_edit_url: null
image: /img/stackql-aws-provider-featured-image.png
---

import CopyableCode from '@site/src/components/CopyableCode/CopyableCode';
import CodeBlock from '@theme/CodeBlock';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Creates, updates, deletes, gets or lists a <code>delivery_streams</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="delivery_streams" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.firehose.delivery_streams" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_delivery_stream"
    values={[
        { label: 'describe_delivery_stream', value: 'describe_delivery_stream' },
        { label: 'list_delivery_streams', value: 'list_delivery_streams' }
    ]}
>
<TabItem value="describe_delivery_stream">

<table>
<thead>
    <tr>
    <th>Name</th>
    <th>Datatype</th>
    <th>Description</th>
    </tr>
</thead>
<tbody>
<tr>
    <td><CopyableCode code="create_timestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that the Firehose stream was created.</td>
</tr>
<tr>
    <td><CopyableCode code="delivery_stream_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the Firehose stream. For more information, see Amazon Resource Names (ARNs) and Amazon Web Services Service Namespaces. (pattern: &lt;code&gt;arn:.*:firehose:&#91;a-zA-Z0-9\-&#93;+:\d&#123;12&#125;:deliverystream/&#91;a-zA-Z0-9._-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="delivery_stream_encryption_configuration" /></td>
    <td><code>object</code></td>
    <td>Indicates the server-side encryption (SSE) status for the Firehose stream.</td>
</tr>
<tr>
    <td><CopyableCode code="delivery_stream_name" /></td>
    <td><code>string</code></td>
    <td>The name of the Firehose stream. (pattern: &lt;code&gt;&#91;a-zA-Z0-9_.-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="delivery_stream_status" /></td>
    <td><code>string</code></td>
    <td>The status of the Firehose stream. If the status of a Firehose stream is CREATING_FAILED, this status doesn't change, and you can't invoke CreateDeliveryStream again on it. However, you can invoke the DeleteDeliveryStream operation to delete it. (CREATING, CREATING_FAILED, DELETING, DELETING_FAILED, ACTIVE)</td>
</tr>
<tr>
    <td><CopyableCode code="delivery_stream_type" /></td>
    <td><code>string</code></td>
    <td>The Firehose stream type. This can be one of the following values: DirectPut: Provider applications access the Firehose stream directly. KinesisStreamAsSource: The Firehose stream uses a Kinesis data stream as a source. (DirectPut, KinesisStreamAsSource, MSKAsSource, DatabaseAsSource)</td>
</tr>
<tr>
    <td><CopyableCode code="destinations" /></td>
    <td><code>array</code></td>
    <td>The destinations.</td>
</tr>
<tr>
    <td><CopyableCode code="failure_description" /></td>
    <td><code>object</code></td>
    <td>Provides details in case one of the following operations fails due to an error related to KMS: CreateDeliveryStream, DeleteDeliveryStream, StartDeliveryStreamEncryption, StopDeliveryStreamEncryption.</td>
</tr>
<tr>
    <td><CopyableCode code="has_more_destinations" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether there are more destinations available to list.</td>
</tr>
<tr>
    <td><CopyableCode code="last_update_timestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that the Firehose stream was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="source" /></td>
    <td><code>object</code></td>
    <td>If the DeliveryStreamType parameter is KinesisStreamAsSource, a SourceDescription object describing the source Kinesis data stream.</td>
</tr>
<tr>
    <td><CopyableCode code="version_id" /></td>
    <td><code>string</code></td>
    <td>Each time the destination is updated for a Firehose stream, the version ID is changed, and the current version ID is required when updating the destination. This is so that the service knows it is applying the changes to the correct version of the delivery stream. (pattern: &lt;code&gt;&#91;0-9&#93;+&lt;/code&gt;)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_delivery_streams">

<table>
<thead>
    <tr>
    <th>Name</th>
    <th>Datatype</th>
    <th>Description</th>
    </tr>
</thead>
<tbody>
<tr>
    <td><CopyableCode code="delivery_stream_names" /></td>
    <td><code>array</code></td>
    <td>The names of the Firehose streams.</td>
</tr>
<tr>
    <td><CopyableCode code="has_more_delivery_streams" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether there are more Firehose streams available to list.</td>
</tr>
</tbody>
</table>
</TabItem>
</Tabs>

## Methods

The following methods are available for this resource:

<table>
<thead>
    <tr>
    <th>Name</th>
    <th>Accessible by</th>
    <th>Required Params</th>
    <th>Optional Params</th>
    <th>Description</th>
    </tr>
</thead>
<tbody>
<tr>
    <td><a href="#describe_delivery_stream"><CopyableCode code="describe_delivery_stream" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Describes the specified Firehose stream and its status. For example, after your Firehose stream is created, call DescribeDeliveryStream to see whether the Firehose stream is ACTIVE and therefore ready for data to be sent to it. If the status of a Firehose stream is CREATING_FAILED, this status doesn't change, and you can't invoke CreateDeliveryStream again on it. However, you can invoke the DeleteDeliveryStream operation to delete it. If the status is DELETING_FAILED, you can force deletion by invoking DeleteDeliveryStream again but with DeleteDeliveryStreamInput$AllowForceDelete set to true.</td>
</tr>
<tr>
    <td><a href="#list_delivery_streams"><CopyableCode code="list_delivery_streams" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists your Firehose streams in alphabetical order of their names. The number of Firehose streams might be too large to return using a single call to ListDeliveryStreams. You can limit the number of Firehose streams returned, using the Limit parameter. To determine whether there are more delivery streams to list, check the value of HasMoreDeliveryStreams in the output. If there are more Firehose streams to list, you can request them by calling this operation again and setting the ExclusiveStartDeliveryStreamName parameter to the name of the last Firehose stream returned in the last call.</td>
</tr>
<tr>
    <td><a href="#create_delivery_stream"><CopyableCode code="create_delivery_stream" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-DeliveryStreamName"><code>DeliveryStreamName</code></a></td>
    <td></td>
    <td>Creates a Firehose stream. By default, you can create up to 5,000 Firehose streams per Amazon Web Services Region. This is an asynchronous operation that immediately returns. The initial status of the Firehose stream is CREATING. After the Firehose stream is created, its status is ACTIVE and it now accepts data. If the Firehose stream creation fails, the status transitions to CREATING_FAILED. Attempts to send data to a delivery stream that is not in the ACTIVE state cause an exception. To check the state of a Firehose stream, use DescribeDeliveryStream. If the status of a Firehose stream is CREATING_FAILED, this status doesn't change, and you can't invoke CreateDeliveryStream again on it. However, you can invoke the DeleteDeliveryStream operation to delete it. A Firehose stream can be configured to receive records directly from providers using PutRecord or PutRecordBatch, or it can be configured to use an existing Kinesis stream as its source. To specify a Kinesis data stream as input, set the DeliveryStreamType parameter to KinesisStreamAsSource, and provide the Kinesis stream Amazon Resource Name (ARN) and role ARN in the KinesisStreamSourceConfiguration parameter. To create a Firehose stream with server-side encryption (SSE) enabled, include DeliveryStreamEncryptionConfigurationInput in your request. This is optional. You can also invoke StartDeliveryStreamEncryption to turn on SSE for an existing Firehose stream that doesn't have SSE enabled. A Firehose stream is configured with a single destination, such as Amazon Simple Storage Service (Amazon S3), Amazon Redshift, Amazon OpenSearch Service, Amazon OpenSearch Serverless, Splunk, and any custom HTTP endpoint or HTTP endpoints owned by or supported by third-party service providers, including Datadog, Dynatrace, LogicMonitor, MongoDB, New Relic, and Sumo Logic. You must specify only one of the following destination configuration parameters: ExtendedS3DestinationConfiguration, S3DestinationConfiguration, ElasticsearchDestinationConfiguration, RedshiftDestinationConfiguration, or SplunkDestinationConfiguration. When you specify S3DestinationConfiguration, you can also provide the following optional values: BufferingHints, EncryptionConfiguration, and CompressionFormat. By default, if no BufferingHints value is provided, Firehose buffers data up to 5 MB or for 5 minutes, whichever condition is satisfied first. BufferingHints is a hint, so there are some cases where the service cannot adhere to these conditions strictly. For example, record boundaries might be such that the size is a little over or under the configured buffering size. By default, no encryption is performed. We strongly recommend that you enable encryption to ensure secure data storage in Amazon S3. A few notes about Amazon Redshift as a destination: An Amazon Redshift destination requires an S3 bucket as intermediate location. Firehose first delivers data to Amazon S3 and then uses COPY syntax to load data into an Amazon Redshift table. This is specified in the RedshiftDestinationConfiguration.S3Configuration parameter. The compression formats SNAPPY or ZIP cannot be specified in RedshiftDestinationConfiguration.S3Configuration because the Amazon Redshift COPY operation that reads from the S3 bucket doesn't support these compression formats. We strongly recommend that you use the user name and password you provide exclusively with Firehose, and that the permissions for the account are restricted for Amazon Redshift INSERT permissions. Firehose assumes the IAM role that is configured as part of the destination. The role should allow the Firehose principal to assume the role, and the role should have permissions that allow the service to deliver the data. For more information, see Grant Firehose Access to an Amazon S3 Destination in the Amazon Firehose Developer Guide.</td>
</tr>
<tr>
    <td><a href="#update_destination"><CopyableCode code="update_destination" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-DeliveryStreamName"><code>DeliveryStreamName</code></a>, <a href="#parameter-CurrentDeliveryStreamVersionId"><code>CurrentDeliveryStreamVersionId</code></a>, <a href="#parameter-DestinationId"><code>DestinationId</code></a></td>
    <td></td>
    <td>Updates the specified destination of the specified Firehose stream. Use this operation to change the destination type (for example, to replace the Amazon S3 destination with Amazon Redshift) or change the parameters associated with a destination (for example, to change the bucket name of the Amazon S3 destination). The update might not occur immediately. The target Firehose stream remains active while the configurations are updated, so data writes to the Firehose stream can continue during this process. The updated configurations are usually effective within a few minutes. Switching between Amazon OpenSearch Service and other services is not supported. For an Amazon OpenSearch Service destination, you can only update to another Amazon OpenSearch Service destination. If the destination type is the same, Firehose merges the configuration parameters specified with the destination configuration that already exists on the delivery stream. If any of the parameters are not specified in the call, the existing values are retained. For example, in the Amazon S3 destination, if EncryptionConfiguration is not specified, then the existing EncryptionConfiguration is maintained on the destination. If the destination type is not the same, for example, changing the destination from Amazon S3 to Amazon Redshift, Firehose does not merge any parameters. In this case, all parameters must be specified. Firehose uses CurrentDeliveryStreamVersionId to avoid race conditions and conflicting merges. This is a required field, and the service updates the configuration only if the existing configuration has a version ID that matches. After the update is applied successfully, the version ID is updated, and can be retrieved using DescribeDeliveryStream. Use the new version ID to set CurrentDeliveryStreamVersionId in the next call.</td>
</tr>
<tr>
    <td><a href="#put_record"><CopyableCode code="put_record" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-DeliveryStreamName"><code>DeliveryStreamName</code></a>, <a href="#parameter-Record"><code>Record</code></a></td>
    <td></td>
    <td>Writes a single data record into an Firehose stream. To write multiple data records into a Firehose stream, use PutRecordBatch. Applications using these operations are referred to as producers. By default, each Firehose stream can take in up to 2,000 transactions per second, 5,000 records per second, or 5 MB per second. If you use PutRecord and PutRecordBatch, the limits are an aggregate across these two operations for each Firehose stream. For more information about limits and how to request an increase, see Amazon Firehose Limits. Firehose accumulates and publishes a particular metric for a customer account in one minute intervals. It is possible that the bursts of incoming bytes/records ingested to a Firehose stream last only for a few seconds. Due to this, the actual spikes in the traffic might not be fully visible in the customer's 1 minute CloudWatch metrics. You must specify the name of the Firehose stream and the data record when using PutRecord. The data record consists of a data blob that can be up to 1,000 KiB in size, and any kind of data. For example, it can be a segment from a log file, geographic location data, website clickstream data, and so on. For multi record de-aggregation, you can not put more than 500 records even if the data blob length is less than 1000 KiB. If you include more than 500 records, the request succeeds but the record de-aggregation doesn't work as expected and transformation lambda is invoked with the complete base64 encoded data blob instead of de-aggregated base64 decoded records. Firehose buffers records before delivering them to the destination. To disambiguate the data blobs at the destination, a common solution is to use delimiters in the data, such as a newline (\n) or some other character unique within the data. This allows the consumer application to parse individual data items when reading the data from the destination. The PutRecord operation returns a RecordId, which is a unique string assigned to each record. Producer applications can use this ID for purposes such as auditability and investigation. If the PutRecord operation throws a ServiceUnavailableException, the API is automatically reinvoked (retried) 3 times. If the exception persists, it is possible that the throughput limits have been exceeded for the Firehose stream. Re-invoking the Put API operations (for example, PutRecord and PutRecordBatch) can result in data duplicates. For larger data assets, allow for a longer time out before retrying Put API operations. Data records sent to Firehose are stored for 24 hours from the time they are added to a Firehose stream as it tries to send the records to the destination. If the destination is unreachable for more than 24 hours, the data is no longer available. Don't concatenate two or more base64 strings to form the data fields of your records. Instead, concatenate the raw data, then perform base64 encoding.</td>
</tr>
<tr>
    <td><a href="#put_record_batch"><CopyableCode code="put_record_batch" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-DeliveryStreamName"><code>DeliveryStreamName</code></a>, <a href="#parameter-Records"><code>Records</code></a></td>
    <td></td>
    <td>Writes multiple data records into a Firehose stream in a single call, which can achieve higher throughput per producer than when writing single records. To write single data records into a Firehose stream, use PutRecord. Applications using these operations are referred to as producers. Firehose accumulates and publishes a particular metric for a customer account in one minute intervals. It is possible that the bursts of incoming bytes/records ingested to a Firehose stream last only for a few seconds. Due to this, the actual spikes in the traffic might not be fully visible in the customer's 1 minute CloudWatch metrics. For information about service quota, see Amazon Firehose Quota. Each PutRecordBatch request supports up to 500 records. Each record in the request can be as large as 1,000 KB (before base64 encoding), up to a limit of 4 MB for the entire request. These limits cannot be changed. You must specify the name of the Firehose stream and the data record when using PutRecord. The data record consists of a data blob that can be up to 1,000 KB in size, and any kind of data. For example, it could be a segment from a log file, geographic location data, website clickstream data, and so on. For multi record de-aggregation, you can not put more than 500 records even if the data blob length is less than 1000 KiB. If you include more than 500 records, the request succeeds but the record de-aggregation doesn't work as expected and transformation lambda is invoked with the complete base64 encoded data blob instead of de-aggregated base64 decoded records. Firehose buffers records before delivering them to the destination. To disambiguate the data blobs at the destination, a common solution is to use delimiters in the data, such as a newline (\n) or some other character unique within the data. This allows the consumer application to parse individual data items when reading the data from the destination. The PutRecordBatch response includes a count of failed records, FailedPutCount, and an array of responses, RequestResponses. Even if the PutRecordBatch call succeeds, the value of FailedPutCount may be greater than 0, indicating that there are records for which the operation didn't succeed. Each entry in the RequestResponses array provides additional information about the processed record. It directly correlates with a record in the request array using the same ordering, from the top to the bottom. The response array always includes the same number of records as the request array. RequestResponses includes both successfully and unsuccessfully processed records. Firehose tries to process all records in each PutRecordBatch request. A single record failure does not stop the processing of subsequent records. A successfully processed record includes a RecordId value, which is unique for the record. An unsuccessfully processed record includes ErrorCode and ErrorMessage values. ErrorCode reflects the type of error, and is one of the following values: ServiceUnavailableException or InternalFailure. ErrorMessage provides more detailed information about the error. If there is an internal server error or a timeout, the write might have completed or it might have failed. If FailedPutCount is greater than 0, retry the request, resending only those records that might have failed processing. This minimizes the possible duplicate records and also reduces the total bytes sent (and corresponding charges). We recommend that you handle any duplicates at the destination. If PutRecordBatch throws ServiceUnavailableException, the API is automatically reinvoked (retried) 3 times. If the exception persists, it is possible that the throughput limits have been exceeded for the Firehose stream. Re-invoking the Put API operations (for example, PutRecord and PutRecordBatch) can result in data duplicates. For larger data assets, allow for a longer time out before retrying Put API operations. Data records sent to Firehose are stored for 24 hours from the time they are added to a Firehose stream as it attempts to send the records to the destination. If the destination is unreachable for more than 24 hours, the data is no longer available. Don't concatenate two or more base64 strings to form the data fields of your records. Instead, concatenate the raw data, then perform base64 encoding.</td>
</tr>
<tr>
    <td><a href="#delete_delivery_stream"><CopyableCode code="delete_delivery_stream" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a Firehose stream and its data. You can delete a Firehose stream only if it is in one of the following states: ACTIVE, DELETING, CREATING_FAILED, or DELETING_FAILED. You can't delete a Firehose stream that is in the CREATING state. To check the state of a Firehose stream, use DescribeDeliveryStream. DeleteDeliveryStream is an asynchronous API. When an API request to DeleteDeliveryStream succeeds, the Firehose stream is marked for deletion, and it goes into the DELETING state.While the Firehose stream is in the DELETING state, the service might continue to accept records, but it doesn't make any guarantees with respect to delivering the data. Therefore, as a best practice, first stop any applications that are sending records before you delete a Firehose stream. Removal of a Firehose stream that is in the DELETING state is a low priority operation for the service. A stream may remain in the DELETING state for several minutes. Therefore, as a best practice, applications should not wait for streams in the DELETING state to be removed.</td>
</tr>
<tr>
    <td><a href="#start_delivery_stream_encryption"><CopyableCode code="start_delivery_stream_encryption" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-DeliveryStreamName"><code>DeliveryStreamName</code></a></td>
    <td></td>
    <td>Enables server-side encryption (SSE) for the Firehose stream. This operation is asynchronous. It returns immediately. When you invoke it, Firehose first sets the encryption status of the stream to ENABLING, and then to ENABLED. The encryption status of a Firehose stream is the Status property in DeliveryStreamEncryptionConfiguration. If the operation fails, the encryption status changes to ENABLING_FAILED. You can continue to read and write data to your Firehose stream while the encryption status is ENABLING, but the data is not encrypted. It can take up to 5 seconds after the encryption status changes to ENABLED before all records written to the Firehose stream are encrypted. To find out whether a record or a batch of records was encrypted, check the response elements PutRecordOutput$Encrypted and PutRecordBatchOutput$Encrypted, respectively. To check the encryption status of a Firehose stream, use DescribeDeliveryStream. Even if encryption is currently enabled for a Firehose stream, you can still invoke this operation on it to change the ARN of the CMK or both its type and ARN. If you invoke this method to change the CMK, and the old CMK is of type CUSTOMER_MANAGED_CMK, Firehose schedules the grant it had on the old CMK for retirement. If the new CMK is of type CUSTOMER_MANAGED_CMK, Firehose creates a grant that enables it to use the new CMK to encrypt and decrypt data and to manage the grant. For the KMS grant creation to be successful, the Firehose API operations StartDeliveryStreamEncryption and CreateDeliveryStream should not be called with session credentials that are more than 6 hours old. If a Firehose stream already has encryption enabled and then you invoke this operation to change the ARN of the CMK or both its type and ARN and you get ENABLING_FAILED, this only means that the attempt to change the CMK failed. In this case, encryption remains enabled with the old CMK. If the encryption status of your Firehose stream is ENABLING_FAILED, you can invoke this operation again with a valid CMK. The CMK must be enabled and the key policy mustn't explicitly deny the permission for Firehose to invoke KMS encrypt and decrypt operations. You can enable SSE for a Firehose stream only if it's a Firehose stream that uses DirectPut as its source. The StartDeliveryStreamEncryption and StopDeliveryStreamEncryption operations have a combined limit of 25 calls per Firehose stream per 24 hours. For example, you reach the limit if you call StartDeliveryStreamEncryption 13 times and StopDeliveryStreamEncryption 12 times for the same Firehose stream in a 24-hour period.</td>
</tr>
<tr>
    <td><a href="#stop_delivery_stream_encryption"><CopyableCode code="stop_delivery_stream_encryption" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-DeliveryStreamName"><code>DeliveryStreamName</code></a></td>
    <td></td>
    <td>Disables server-side encryption (SSE) for the Firehose stream. This operation is asynchronous. It returns immediately. When you invoke it, Firehose first sets the encryption status of the stream to DISABLING, and then to DISABLED. You can continue to read and write data to your stream while its status is DISABLING. It can take up to 5 seconds after the encryption status changes to DISABLED before all records written to the Firehose stream are no longer subject to encryption. To find out whether a record or a batch of records was encrypted, check the response elements PutRecordOutput$Encrypted and PutRecordBatchOutput$Encrypted, respectively. To check the encryption state of a Firehose stream, use DescribeDeliveryStream. If SSE is enabled using a customer managed CMK and then you invoke StopDeliveryStreamEncryption, Firehose schedules the related KMS grant for retirement and then retires it after it ensures that it is finished delivering records to the destination. The StartDeliveryStreamEncryption and StopDeliveryStreamEncryption operations have a combined limit of 25 calls per Firehose stream per 24 hours. For example, you reach the limit if you call StartDeliveryStreamEncryption 13 times and StopDeliveryStreamEncryption 12 times for the same Firehose stream in a 24-hour period.</td>
</tr>
</tbody>
</table>

## Parameters

Parameters can be passed in the `WHERE` clause of a query. Check the [Methods](#methods) section to see which parameters are required or optional for each operation.

<table>
<thead>
    <tr>
    <th>Name</th>
    <th>Datatype</th>
    <th>Description</th>
    </tr>
</thead>
<tbody>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_delivery_stream"
    values={[
        { label: 'describe_delivery_stream', value: 'describe_delivery_stream' },
        { label: 'list_delivery_streams', value: 'list_delivery_streams' }
    ]}
>
<TabItem value="describe_delivery_stream">

Describes the specified Firehose stream and its status. For example, after your Firehose stream is created, call DescribeDeliveryStream to see whether the Firehose stream is ACTIVE and therefore ready for data to be sent to it. If the status of a Firehose stream is CREATING_FAILED, this status doesn't change, and you can't invoke CreateDeliveryStream again on it. However, you can invoke the DeleteDeliveryStream operation to delete it. If the status is DELETING_FAILED, you can force deletion by invoking DeleteDeliveryStream again but with DeleteDeliveryStreamInput$AllowForceDelete set to true.

```sql
SELECT
create_timestamp,
delivery_stream_arn,
delivery_stream_encryption_configuration,
delivery_stream_name,
delivery_stream_status,
delivery_stream_type,
destinations,
failure_description,
has_more_destinations,
last_update_timestamp,
source,
version_id
FROM aws.firehose.delivery_streams
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_delivery_streams">

Lists your Firehose streams in alphabetical order of their names. The number of Firehose streams might be too large to return using a single call to ListDeliveryStreams. You can limit the number of Firehose streams returned, using the Limit parameter. To determine whether there are more delivery streams to list, check the value of HasMoreDeliveryStreams in the output. If there are more Firehose streams to list, you can request them by calling this operation again and setting the ExclusiveStartDeliveryStreamName parameter to the name of the last Firehose stream returned in the last call.

```sql
SELECT
delivery_stream_names,
has_more_delivery_streams
FROM aws.firehose.delivery_streams
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_delivery_stream"
    values={[
        { label: 'create_delivery_stream', value: 'create_delivery_stream' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_delivery_stream">

Creates a Firehose stream. By default, you can create up to 5,000 Firehose streams per Amazon Web Services Region. This is an asynchronous operation that immediately returns. The initial status of the Firehose stream is CREATING. After the Firehose stream is created, its status is ACTIVE and it now accepts data. If the Firehose stream creation fails, the status transitions to CREATING_FAILED. Attempts to send data to a delivery stream that is not in the ACTIVE state cause an exception. To check the state of a Firehose stream, use DescribeDeliveryStream. If the status of a Firehose stream is CREATING_FAILED, this status doesn't change, and you can't invoke CreateDeliveryStream again on it. However, you can invoke the DeleteDeliveryStream operation to delete it. A Firehose stream can be configured to receive records directly from providers using PutRecord or PutRecordBatch, or it can be configured to use an existing Kinesis stream as its source. To specify a Kinesis data stream as input, set the DeliveryStreamType parameter to KinesisStreamAsSource, and provide the Kinesis stream Amazon Resource Name (ARN) and role ARN in the KinesisStreamSourceConfiguration parameter. To create a Firehose stream with server-side encryption (SSE) enabled, include DeliveryStreamEncryptionConfigurationInput in your request. This is optional. You can also invoke StartDeliveryStreamEncryption to turn on SSE for an existing Firehose stream that doesn't have SSE enabled. A Firehose stream is configured with a single destination, such as Amazon Simple Storage Service (Amazon S3), Amazon Redshift, Amazon OpenSearch Service, Amazon OpenSearch Serverless, Splunk, and any custom HTTP endpoint or HTTP endpoints owned by or supported by third-party service providers, including Datadog, Dynatrace, LogicMonitor, MongoDB, New Relic, and Sumo Logic. You must specify only one of the following destination configuration parameters: ExtendedS3DestinationConfiguration, S3DestinationConfiguration, ElasticsearchDestinationConfiguration, RedshiftDestinationConfiguration, or SplunkDestinationConfiguration. When you specify S3DestinationConfiguration, you can also provide the following optional values: BufferingHints, EncryptionConfiguration, and CompressionFormat. By default, if no BufferingHints value is provided, Firehose buffers data up to 5 MB or for 5 minutes, whichever condition is satisfied first. BufferingHints is a hint, so there are some cases where the service cannot adhere to these conditions strictly. For example, record boundaries might be such that the size is a little over or under the configured buffering size. By default, no encryption is performed. We strongly recommend that you enable encryption to ensure secure data storage in Amazon S3. A few notes about Amazon Redshift as a destination: An Amazon Redshift destination requires an S3 bucket as intermediate location. Firehose first delivers data to Amazon S3 and then uses COPY syntax to load data into an Amazon Redshift table. This is specified in the RedshiftDestinationConfiguration.S3Configuration parameter. The compression formats SNAPPY or ZIP cannot be specified in RedshiftDestinationConfiguration.S3Configuration because the Amazon Redshift COPY operation that reads from the S3 bucket doesn't support these compression formats. We strongly recommend that you use the user name and password you provide exclusively with Firehose, and that the permissions for the account are restricted for Amazon Redshift INSERT permissions. Firehose assumes the IAM role that is configured as part of the destination. The role should allow the Firehose principal to assume the role, and the role should have permissions that allow the service to deliver the data. For more information, see Grant Firehose Access to an Amazon S3 Destination in the Amazon Firehose Developer Guide.

```sql
INSERT INTO aws.firehose.delivery_streams (
DeliveryStreamName,
DeliveryStreamType,
DirectPutSourceConfiguration,
KinesisStreamSourceConfiguration,
DeliveryStreamEncryptionConfigurationInput,
S3DestinationConfiguration,
ExtendedS3DestinationConfiguration,
RedshiftDestinationConfiguration,
ElasticsearchDestinationConfiguration,
AmazonopensearchserviceDestinationConfiguration,
SplunkDestinationConfiguration,
HttpEndpointDestinationConfiguration,
Tags,
AmazonOpenSearchServerlessDestinationConfiguration,
MSKSourceConfiguration,
SnowflakeDestinationConfiguration,
IcebergDestinationConfiguration,
DatabaseSourceConfiguration,
region
)
SELECT 
'{{ DeliveryStreamName }}' /* required */,
'{{ DeliveryStreamType }}',
'{{ DirectPutSourceConfiguration }}',
'{{ KinesisStreamSourceConfiguration }}',
'{{ DeliveryStreamEncryptionConfigurationInput }}',
'{{ S3DestinationConfiguration }}',
'{{ ExtendedS3DestinationConfiguration }}',
'{{ RedshiftDestinationConfiguration }}',
'{{ ElasticsearchDestinationConfiguration }}',
'{{ AmazonopensearchserviceDestinationConfiguration }}',
'{{ SplunkDestinationConfiguration }}',
'{{ HttpEndpointDestinationConfiguration }}',
'{{ Tags }}',
'{{ AmazonOpenSearchServerlessDestinationConfiguration }}',
'{{ MSKSourceConfiguration }}',
'{{ SnowflakeDestinationConfiguration }}',
'{{ IcebergDestinationConfiguration }}',
'{{ DatabaseSourceConfiguration }}',
'{{ region }}'
RETURNING
delivery_stream_arn
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: delivery_streams
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the delivery_streams resource.
    - name: DeliveryStreamName
      value: "{{ DeliveryStreamName }}"
      description: |
        The name of the Firehose stream. This name must be unique per Amazon Web Services account in the same Amazon Web Services Region. If the Firehose streams are in different accounts or different Regions, you can have multiple Firehose streams with the same name.
    - name: DeliveryStreamType
      value: "{{ DeliveryStreamType }}"
      description: |
        The Firehose stream type. This parameter can be one of the following values: DirectPut: Provider applications access the Firehose stream directly. KinesisStreamAsSource: The Firehose stream uses a Kinesis data stream as a source.
      valid_values: ['DirectPut', 'KinesisStreamAsSource', 'MSKAsSource', 'DatabaseAsSource']
    - name: DirectPutSourceConfiguration
      description: |
        The structure that configures parameters such as ThroughputHintInMBs for a stream configured with Direct PUT as a source.
      value:
        ThroughputHintInMBs: {{ ThroughputHintInMBs }}
    - name: KinesisStreamSourceConfiguration
      description: |
        When a Kinesis data stream is used as the source for the Firehose stream, a KinesisStreamSourceConfiguration containing the Kinesis data stream Amazon Resource Name (ARN) and the role ARN for the source stream.
      value:
        KinesisStreamARN: "{{ KinesisStreamARN }}"
        RoleARN: "{{ RoleARN }}"
    - name: DeliveryStreamEncryptionConfigurationInput
      description: |
        Used to specify the type and Amazon Resource Name (ARN) of the KMS key needed for Server-Side Encryption (SSE).
      value:
        KeyARN: "{{ KeyARN }}"
        KeyType: "{{ KeyType }}"
    - name: S3DestinationConfiguration
      description: |
        [Deprecated] The destination in Amazon S3. You can specify only one destination.
      value:
        RoleARN: "{{ RoleARN }}"
        BucketARN: "{{ BucketARN }}"
        Prefix: "{{ Prefix }}"
        ErrorOutputPrefix: "{{ ErrorOutputPrefix }}"
        BufferingHints:
          SizeInMBs: {{ SizeInMBs }}
          IntervalInSeconds: {{ IntervalInSeconds }}
        CompressionFormat: "{{ CompressionFormat }}"
        EncryptionConfiguration:
          NoEncryptionConfig: "{{ NoEncryptionConfig }}"
          KMSEncryptionConfig:
            AWSKMSKeyARN: "{{ AWSKMSKeyARN }}"
        CloudWatchLoggingOptions:
          Enabled: {{ Enabled }}
          LogGroupName: "{{ LogGroupName }}"
          LogStreamName: "{{ LogStreamName }}"
    - name: ExtendedS3DestinationConfiguration
      description: |
        The destination in Amazon S3. You can specify only one destination.
      value:
        RoleARN: "{{ RoleARN }}"
        BucketARN: "{{ BucketARN }}"
        Prefix: "{{ Prefix }}"
        ErrorOutputPrefix: "{{ ErrorOutputPrefix }}"
        BufferingHints:
          SizeInMBs: {{ SizeInMBs }}
          IntervalInSeconds: {{ IntervalInSeconds }}
        CompressionFormat: "{{ CompressionFormat }}"
        EncryptionConfiguration:
          NoEncryptionConfig: "{{ NoEncryptionConfig }}"
          KMSEncryptionConfig:
            AWSKMSKeyARN: "{{ AWSKMSKeyARN }}"
        CloudWatchLoggingOptions:
          Enabled: {{ Enabled }}
          LogGroupName: "{{ LogGroupName }}"
          LogStreamName: "{{ LogStreamName }}"
        ProcessingConfiguration:
          Enabled: {{ Enabled }}
          Processors:
            - Type: "{{ Type }}"
              Parameters: "{{ Parameters }}"
        S3BackupMode: "{{ S3BackupMode }}"
        S3BackupConfiguration:
          RoleARN: "{{ RoleARN }}"
          BucketARN: "{{ BucketARN }}"
          Prefix: "{{ Prefix }}"
          ErrorOutputPrefix: "{{ ErrorOutputPrefix }}"
          BufferingHints:
            SizeInMBs: {{ SizeInMBs }}
            IntervalInSeconds: {{ IntervalInSeconds }}
          CompressionFormat: "{{ CompressionFormat }}"
          EncryptionConfiguration:
            NoEncryptionConfig: "{{ NoEncryptionConfig }}"
            KMSEncryptionConfig:
              AWSKMSKeyARN: "{{ AWSKMSKeyARN }}"
          CloudWatchLoggingOptions:
            Enabled: {{ Enabled }}
            LogGroupName: "{{ LogGroupName }}"
            LogStreamName: "{{ LogStreamName }}"
        DataFormatConversionConfiguration:
          SchemaConfiguration:
            RoleARN: "{{ RoleARN }}"
            CatalogId: "{{ CatalogId }}"
            DatabaseName: "{{ DatabaseName }}"
            TableName: "{{ TableName }}"
            Region: "{{ Region }}"
            VersionId: "{{ VersionId }}"
          InputFormatConfiguration:
            Deserializer:
              OpenXJsonSerDe:
                ConvertDotsInJsonKeysToUnderscores: {{ ConvertDotsInJsonKeysToUnderscores }}
                CaseInsensitive: {{ CaseInsensitive }}
                ColumnToJsonKeyMappings: "{{ ColumnToJsonKeyMappings }}"
              HiveJsonSerDe:
                TimestampFormats: "{{ TimestampFormats }}"
          OutputFormatConfiguration:
            Serializer:
              ParquetSerDe:
                BlockSizeBytes: {{ BlockSizeBytes }}
                PageSizeBytes: {{ PageSizeBytes }}
                Compression: "{{ Compression }}"
                EnableDictionaryCompression: {{ EnableDictionaryCompression }}
                MaxPaddingBytes: {{ MaxPaddingBytes }}
                WriterVersion: "{{ WriterVersion }}"
              OrcSerDe:
                StripeSizeBytes: {{ StripeSizeBytes }}
                BlockSizeBytes: {{ BlockSizeBytes }}
                RowIndexStride: {{ RowIndexStride }}
                EnablePadding: {{ EnablePadding }}
                PaddingTolerance: {{ PaddingTolerance }}
                Compression: "{{ Compression }}"
                BloomFilterColumns: "{{ BloomFilterColumns }}"
                BloomFilterFalsePositiveProbability: {{ BloomFilterFalsePositiveProbability }}
                DictionaryKeyThreshold: {{ DictionaryKeyThreshold }}
                FormatVersion: "{{ FormatVersion }}"
          Enabled: {{ Enabled }}
        DynamicPartitioningConfiguration:
          RetryOptions:
            DurationInSeconds: {{ DurationInSeconds }}
          Enabled: {{ Enabled }}
        FileExtension: "{{ FileExtension }}"
        CustomTimeZone: "{{ CustomTimeZone }}"
    - name: RedshiftDestinationConfiguration
      description: |
        The destination in Amazon Redshift. You can specify only one destination.
      value:
        RoleARN: "{{ RoleARN }}"
        ClusterJDBCURL: "{{ ClusterJDBCURL }}"
        CopyCommand:
          DataTableName: "{{ DataTableName }}"
          DataTableColumns: "{{ DataTableColumns }}"
          CopyOptions: "{{ CopyOptions }}"
        Username: "{{ Username }}"
        Password: "{{ Password }}"
        RetryOptions:
          DurationInSeconds: {{ DurationInSeconds }}
        S3Configuration:
          RoleARN: "{{ RoleARN }}"
          BucketARN: "{{ BucketARN }}"
          Prefix: "{{ Prefix }}"
          ErrorOutputPrefix: "{{ ErrorOutputPrefix }}"
          BufferingHints:
            SizeInMBs: {{ SizeInMBs }}
            IntervalInSeconds: {{ IntervalInSeconds }}
          CompressionFormat: "{{ CompressionFormat }}"
          EncryptionConfiguration:
            NoEncryptionConfig: "{{ NoEncryptionConfig }}"
            KMSEncryptionConfig:
              AWSKMSKeyARN: "{{ AWSKMSKeyARN }}"
          CloudWatchLoggingOptions:
            Enabled: {{ Enabled }}
            LogGroupName: "{{ LogGroupName }}"
            LogStreamName: "{{ LogStreamName }}"
        ProcessingConfiguration:
          Enabled: {{ Enabled }}
          Processors:
            - Type: "{{ Type }}"
              Parameters: "{{ Parameters }}"
        S3BackupMode: "{{ S3BackupMode }}"
        S3BackupConfiguration:
          RoleARN: "{{ RoleARN }}"
          BucketARN: "{{ BucketARN }}"
          Prefix: "{{ Prefix }}"
          ErrorOutputPrefix: "{{ ErrorOutputPrefix }}"
          BufferingHints:
            SizeInMBs: {{ SizeInMBs }}
            IntervalInSeconds: {{ IntervalInSeconds }}
          CompressionFormat: "{{ CompressionFormat }}"
          EncryptionConfiguration:
            NoEncryptionConfig: "{{ NoEncryptionConfig }}"
            KMSEncryptionConfig:
              AWSKMSKeyARN: "{{ AWSKMSKeyARN }}"
          CloudWatchLoggingOptions:
            Enabled: {{ Enabled }}
            LogGroupName: "{{ LogGroupName }}"
            LogStreamName: "{{ LogStreamName }}"
        CloudWatchLoggingOptions:
          Enabled: {{ Enabled }}
          LogGroupName: "{{ LogGroupName }}"
          LogStreamName: "{{ LogStreamName }}"
        SecretsManagerConfiguration:
          SecretARN: "{{ SecretARN }}"
          RoleARN: "{{ RoleARN }}"
          Enabled: {{ Enabled }}
    - name: ElasticsearchDestinationConfiguration
      description: |
        The destination in Amazon OpenSearch Service. You can specify only one destination.
      value:
        RoleARN: "{{ RoleARN }}"
        DomainARN: "{{ DomainARN }}"
        ClusterEndpoint: "{{ ClusterEndpoint }}"
        IndexName: "{{ IndexName }}"
        TypeName: "{{ TypeName }}"
        IndexRotationPeriod: "{{ IndexRotationPeriod }}"
        BufferingHints:
          IntervalInSeconds: {{ IntervalInSeconds }}
          SizeInMBs: {{ SizeInMBs }}
        RetryOptions:
          DurationInSeconds: {{ DurationInSeconds }}
        S3BackupMode: "{{ S3BackupMode }}"
        S3Configuration:
          RoleARN: "{{ RoleARN }}"
          BucketARN: "{{ BucketARN }}"
          Prefix: "{{ Prefix }}"
          ErrorOutputPrefix: "{{ ErrorOutputPrefix }}"
          BufferingHints:
            SizeInMBs: {{ SizeInMBs }}
            IntervalInSeconds: {{ IntervalInSeconds }}
          CompressionFormat: "{{ CompressionFormat }}"
          EncryptionConfiguration:
            NoEncryptionConfig: "{{ NoEncryptionConfig }}"
            KMSEncryptionConfig:
              AWSKMSKeyARN: "{{ AWSKMSKeyARN }}"
          CloudWatchLoggingOptions:
            Enabled: {{ Enabled }}
            LogGroupName: "{{ LogGroupName }}"
            LogStreamName: "{{ LogStreamName }}"
        ProcessingConfiguration:
          Enabled: {{ Enabled }}
          Processors:
            - Type: "{{ Type }}"
              Parameters: "{{ Parameters }}"
        CloudWatchLoggingOptions:
          Enabled: {{ Enabled }}
          LogGroupName: "{{ LogGroupName }}"
          LogStreamName: "{{ LogStreamName }}"
        VpcConfiguration:
          SubnetIds:
            - "{{ SubnetIds }}"
          RoleARN: "{{ RoleARN }}"
          SecurityGroupIds:
            - "{{ SecurityGroupIds }}"
        DocumentIdOptions:
          DefaultDocumentIdFormat: "{{ DefaultDocumentIdFormat }}"
    - name: AmazonopensearchserviceDestinationConfiguration
      description: |
        The destination in Amazon OpenSearch Service. You can specify only one destination.
      value:
        RoleARN: "{{ RoleARN }}"
        DomainARN: "{{ DomainARN }}"
        ClusterEndpoint: "{{ ClusterEndpoint }}"
        IndexName: "{{ IndexName }}"
        TypeName: "{{ TypeName }}"
        IndexRotationPeriod: "{{ IndexRotationPeriod }}"
        BufferingHints:
          IntervalInSeconds: {{ IntervalInSeconds }}
          SizeInMBs: {{ SizeInMBs }}
        RetryOptions:
          DurationInSeconds: {{ DurationInSeconds }}
        S3BackupMode: "{{ S3BackupMode }}"
        S3Configuration:
          RoleARN: "{{ RoleARN }}"
          BucketARN: "{{ BucketARN }}"
          Prefix: "{{ Prefix }}"
          ErrorOutputPrefix: "{{ ErrorOutputPrefix }}"
          BufferingHints:
            SizeInMBs: {{ SizeInMBs }}
            IntervalInSeconds: {{ IntervalInSeconds }}
          CompressionFormat: "{{ CompressionFormat }}"
          EncryptionConfiguration:
            NoEncryptionConfig: "{{ NoEncryptionConfig }}"
            KMSEncryptionConfig:
              AWSKMSKeyARN: "{{ AWSKMSKeyARN }}"
          CloudWatchLoggingOptions:
            Enabled: {{ Enabled }}
            LogGroupName: "{{ LogGroupName }}"
            LogStreamName: "{{ LogStreamName }}"
        ProcessingConfiguration:
          Enabled: {{ Enabled }}
          Processors:
            - Type: "{{ Type }}"
              Parameters: "{{ Parameters }}"
        CloudWatchLoggingOptions:
          Enabled: {{ Enabled }}
          LogGroupName: "{{ LogGroupName }}"
          LogStreamName: "{{ LogStreamName }}"
        VpcConfiguration:
          SubnetIds:
            - "{{ SubnetIds }}"
          RoleARN: "{{ RoleARN }}"
          SecurityGroupIds:
            - "{{ SecurityGroupIds }}"
        DocumentIdOptions:
          DefaultDocumentIdFormat: "{{ DefaultDocumentIdFormat }}"
    - name: SplunkDestinationConfiguration
      description: |
        The destination in Splunk. You can specify only one destination.
      value:
        HECEndpoint: "{{ HECEndpoint }}"
        HECEndpointType: "{{ HECEndpointType }}"
        HECToken: "{{ HECToken }}"
        HECAcknowledgmentTimeoutInSeconds: {{ HECAcknowledgmentTimeoutInSeconds }}
        RetryOptions:
          DurationInSeconds: {{ DurationInSeconds }}
        S3BackupMode: "{{ S3BackupMode }}"
        S3Configuration:
          RoleARN: "{{ RoleARN }}"
          BucketARN: "{{ BucketARN }}"
          Prefix: "{{ Prefix }}"
          ErrorOutputPrefix: "{{ ErrorOutputPrefix }}"
          BufferingHints:
            SizeInMBs: {{ SizeInMBs }}
            IntervalInSeconds: {{ IntervalInSeconds }}
          CompressionFormat: "{{ CompressionFormat }}"
          EncryptionConfiguration:
            NoEncryptionConfig: "{{ NoEncryptionConfig }}"
            KMSEncryptionConfig:
              AWSKMSKeyARN: "{{ AWSKMSKeyARN }}"
          CloudWatchLoggingOptions:
            Enabled: {{ Enabled }}
            LogGroupName: "{{ LogGroupName }}"
            LogStreamName: "{{ LogStreamName }}"
        ProcessingConfiguration:
          Enabled: {{ Enabled }}
          Processors:
            - Type: "{{ Type }}"
              Parameters: "{{ Parameters }}"
        CloudWatchLoggingOptions:
          Enabled: {{ Enabled }}
          LogGroupName: "{{ LogGroupName }}"
          LogStreamName: "{{ LogStreamName }}"
        BufferingHints:
          IntervalInSeconds: {{ IntervalInSeconds }}
          SizeInMBs: {{ SizeInMBs }}
        SecretsManagerConfiguration:
          SecretARN: "{{ SecretARN }}"
          RoleARN: "{{ RoleARN }}"
          Enabled: {{ Enabled }}
    - name: HttpEndpointDestinationConfiguration
      description: |
        Enables configuring Kinesis Firehose to deliver data to any HTTP endpoint destination. You can specify only one destination.
      value:
        EndpointConfiguration:
          Url: "{{ Url }}"
          Name: "{{ Name }}"
          AccessKey: "{{ AccessKey }}"
        BufferingHints:
          SizeInMBs: {{ SizeInMBs }}
          IntervalInSeconds: {{ IntervalInSeconds }}
        CloudWatchLoggingOptions:
          Enabled: {{ Enabled }}
          LogGroupName: "{{ LogGroupName }}"
          LogStreamName: "{{ LogStreamName }}"
        RequestConfiguration:
          ContentEncoding: "{{ ContentEncoding }}"
          CommonAttributes:
            - AttributeName: "{{ AttributeName }}"
              AttributeValue: "{{ AttributeValue }}"
        ProcessingConfiguration:
          Enabled: {{ Enabled }}
          Processors:
            - Type: "{{ Type }}"
              Parameters: "{{ Parameters }}"
        RoleARN: "{{ RoleARN }}"
        RetryOptions:
          DurationInSeconds: {{ DurationInSeconds }}
        S3BackupMode: "{{ S3BackupMode }}"
        S3Configuration:
          RoleARN: "{{ RoleARN }}"
          BucketARN: "{{ BucketARN }}"
          Prefix: "{{ Prefix }}"
          ErrorOutputPrefix: "{{ ErrorOutputPrefix }}"
          BufferingHints:
            SizeInMBs: {{ SizeInMBs }}
            IntervalInSeconds: {{ IntervalInSeconds }}
          CompressionFormat: "{{ CompressionFormat }}"
          EncryptionConfiguration:
            NoEncryptionConfig: "{{ NoEncryptionConfig }}"
            KMSEncryptionConfig:
              AWSKMSKeyARN: "{{ AWSKMSKeyARN }}"
          CloudWatchLoggingOptions:
            Enabled: {{ Enabled }}
            LogGroupName: "{{ LogGroupName }}"
            LogStreamName: "{{ LogStreamName }}"
        SecretsManagerConfiguration:
          SecretARN: "{{ SecretARN }}"
          RoleARN: "{{ RoleARN }}"
          Enabled: {{ Enabled }}
    - name: Tags
      description: |
        A set of tags to assign to the Firehose stream. A tag is a key-value pair that you can define and assign to Amazon Web Services resources. Tags are metadata. For example, you can add friendly names and descriptions or other types of information that can help you distinguish the Firehose stream. For more information about tags, see Using Cost Allocation Tags in the Amazon Web Services Billing and Cost Management User Guide. You can specify up to 50 tags when creating a Firehose stream. If you specify tags in the CreateDeliveryStream action, Amazon Data Firehose performs an additional authorization on the firehose:TagDeliveryStream action to verify if users have permissions to create tags. If you do not provide this permission, requests to create new Firehose streams with IAM resource tags will fail with an AccessDeniedException such as following. AccessDeniedException User: arn:aws:sts::x:assumed-role/x/x is not authorized to perform: firehose:TagDeliveryStream on resource: arn:aws:firehose:us-east-1:x:deliverystream/x with an explicit deny in an identity-based policy. For an example IAM policy, see Tag example.
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
    - name: AmazonOpenSearchServerlessDestinationConfiguration
      description: |
        The destination in the Serverless offering for Amazon OpenSearch Service. You can specify only one destination.
      value:
        RoleARN: "{{ RoleARN }}"
        CollectionEndpoint: "{{ CollectionEndpoint }}"
        IndexName: "{{ IndexName }}"
        BufferingHints:
          IntervalInSeconds: {{ IntervalInSeconds }}
          SizeInMBs: {{ SizeInMBs }}
        RetryOptions:
          DurationInSeconds: {{ DurationInSeconds }}
        S3BackupMode: "{{ S3BackupMode }}"
        S3Configuration:
          RoleARN: "{{ RoleARN }}"
          BucketARN: "{{ BucketARN }}"
          Prefix: "{{ Prefix }}"
          ErrorOutputPrefix: "{{ ErrorOutputPrefix }}"
          BufferingHints:
            SizeInMBs: {{ SizeInMBs }}
            IntervalInSeconds: {{ IntervalInSeconds }}
          CompressionFormat: "{{ CompressionFormat }}"
          EncryptionConfiguration:
            NoEncryptionConfig: "{{ NoEncryptionConfig }}"
            KMSEncryptionConfig:
              AWSKMSKeyARN: "{{ AWSKMSKeyARN }}"
          CloudWatchLoggingOptions:
            Enabled: {{ Enabled }}
            LogGroupName: "{{ LogGroupName }}"
            LogStreamName: "{{ LogStreamName }}"
        ProcessingConfiguration:
          Enabled: {{ Enabled }}
          Processors:
            - Type: "{{ Type }}"
              Parameters: "{{ Parameters }}"
        CloudWatchLoggingOptions:
          Enabled: {{ Enabled }}
          LogGroupName: "{{ LogGroupName }}"
          LogStreamName: "{{ LogStreamName }}"
        VpcConfiguration:
          SubnetIds:
            - "{{ SubnetIds }}"
          RoleARN: "{{ RoleARN }}"
          SecurityGroupIds:
            - "{{ SecurityGroupIds }}"
    - name: MSKSourceConfiguration
      description: |
        The configuration for the Amazon MSK cluster to be used as the source for a delivery stream.
      value:
        MSKClusterARN: "{{ MSKClusterARN }}"
        TopicName: "{{ TopicName }}"
        AuthenticationConfiguration:
          RoleARN: "{{ RoleARN }}"
          Connectivity: "{{ Connectivity }}"
        ReadFromTimestamp: "{{ ReadFromTimestamp }}"
    - name: SnowflakeDestinationConfiguration
      description: |
        Configure Snowflake destination
      value:
        AccountUrl: "{{ AccountUrl }}"
        PrivateKey: "{{ PrivateKey }}"
        KeyPassphrase: "{{ KeyPassphrase }}"
        User: "{{ User }}"
        Database: "{{ Database }}"
        Schema: "{{ Schema }}"
        Table: "{{ Table }}"
        SnowflakeRoleConfiguration:
          Enabled: {{ Enabled }}
          SnowflakeRole: "{{ SnowflakeRole }}"
        DataLoadingOption: "{{ DataLoadingOption }}"
        MetaDataColumnName: "{{ MetaDataColumnName }}"
        ContentColumnName: "{{ ContentColumnName }}"
        SnowflakeVpcConfiguration:
          PrivateLinkVpceId: "{{ PrivateLinkVpceId }}"
        CloudWatchLoggingOptions:
          Enabled: {{ Enabled }}
          LogGroupName: "{{ LogGroupName }}"
          LogStreamName: "{{ LogStreamName }}"
        ProcessingConfiguration:
          Enabled: {{ Enabled }}
          Processors:
            - Type: "{{ Type }}"
              Parameters: "{{ Parameters }}"
        RoleARN: "{{ RoleARN }}"
        RetryOptions:
          DurationInSeconds: {{ DurationInSeconds }}
        S3BackupMode: "{{ S3BackupMode }}"
        S3Configuration:
          RoleARN: "{{ RoleARN }}"
          BucketARN: "{{ BucketARN }}"
          Prefix: "{{ Prefix }}"
          ErrorOutputPrefix: "{{ ErrorOutputPrefix }}"
          BufferingHints:
            SizeInMBs: {{ SizeInMBs }}
            IntervalInSeconds: {{ IntervalInSeconds }}
          CompressionFormat: "{{ CompressionFormat }}"
          EncryptionConfiguration:
            NoEncryptionConfig: "{{ NoEncryptionConfig }}"
            KMSEncryptionConfig:
              AWSKMSKeyARN: "{{ AWSKMSKeyARN }}"
          CloudWatchLoggingOptions:
            Enabled: {{ Enabled }}
            LogGroupName: "{{ LogGroupName }}"
            LogStreamName: "{{ LogStreamName }}"
        SecretsManagerConfiguration:
          SecretARN: "{{ SecretARN }}"
          RoleARN: "{{ RoleARN }}"
          Enabled: {{ Enabled }}
        BufferingHints:
          SizeInMBs: {{ SizeInMBs }}
          IntervalInSeconds: {{ IntervalInSeconds }}
    - name: IcebergDestinationConfiguration
      description: |
        Configure Apache Iceberg Tables destination.
      value:
        DestinationTableConfigurationList:
          - DestinationTableName: "{{ DestinationTableName }}"
            DestinationDatabaseName: "{{ DestinationDatabaseName }}"
            UniqueKeys: "{{ UniqueKeys }}"
            PartitionSpec:
              Identity:
                - SourceName: "{{ SourceName }}"
            S3ErrorOutputPrefix: "{{ S3ErrorOutputPrefix }}"
        SchemaEvolutionConfiguration:
          Enabled: {{ Enabled }}
        TableCreationConfiguration:
          Enabled: {{ Enabled }}
        BufferingHints:
          SizeInMBs: {{ SizeInMBs }}
          IntervalInSeconds: {{ IntervalInSeconds }}
        CloudWatchLoggingOptions:
          Enabled: {{ Enabled }}
          LogGroupName: "{{ LogGroupName }}"
          LogStreamName: "{{ LogStreamName }}"
        ProcessingConfiguration:
          Enabled: {{ Enabled }}
          Processors:
            - Type: "{{ Type }}"
              Parameters: "{{ Parameters }}"
        S3BackupMode: "{{ S3BackupMode }}"
        RetryOptions:
          DurationInSeconds: {{ DurationInSeconds }}
        RoleARN: "{{ RoleARN }}"
        AppendOnly: {{ AppendOnly }}
        CatalogConfiguration:
          CatalogARN: "{{ CatalogARN }}"
          WarehouseLocation: "{{ WarehouseLocation }}"
        S3Configuration:
          RoleARN: "{{ RoleARN }}"
          BucketARN: "{{ BucketARN }}"
          Prefix: "{{ Prefix }}"
          ErrorOutputPrefix: "{{ ErrorOutputPrefix }}"
          BufferingHints:
            SizeInMBs: {{ SizeInMBs }}
            IntervalInSeconds: {{ IntervalInSeconds }}
          CompressionFormat: "{{ CompressionFormat }}"
          EncryptionConfiguration:
            NoEncryptionConfig: "{{ NoEncryptionConfig }}"
            KMSEncryptionConfig:
              AWSKMSKeyARN: "{{ AWSKMSKeyARN }}"
          CloudWatchLoggingOptions:
            Enabled: {{ Enabled }}
            LogGroupName: "{{ LogGroupName }}"
            LogStreamName: "{{ LogStreamName }}"
    - name: DatabaseSourceConfiguration
      description: |
        The top level object for configuring streams with database as a source. Amazon Data Firehose is in preview release and is subject to change.
      value:
        Type: "{{ Type }}"
        Endpoint: "{{ Endpoint }}"
        Port: {{ Port }}
        SSLMode: "{{ SSLMode }}"
        Databases:
          Include:
            - "{{ Include }}"
          Exclude:
            - "{{ Exclude }}"
        Tables:
          Include:
            - "{{ Include }}"
          Exclude:
            - "{{ Exclude }}"
        Columns:
          Include:
            - "{{ Include }}"
          Exclude:
            - "{{ Exclude }}"
        SurrogateKeys:
          - "{{ SurrogateKeys }}"
        SnapshotWatermarkTable: "{{ SnapshotWatermarkTable }}"
        DatabaseSourceAuthenticationConfiguration:
          SecretsManagerConfiguration:
            SecretARN: "{{ SecretARN }}"
            RoleARN: "{{ RoleARN }}"
            Enabled: {{ Enabled }}
        DatabaseSourceVPCConfiguration:
          VpcEndpointServiceName: "{{ VpcEndpointServiceName }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_destination"
    values={[
        { label: 'update_destination', value: 'update_destination' }
    ]}
>
<TabItem value="update_destination">

Updates the specified destination of the specified Firehose stream. Use this operation to change the destination type (for example, to replace the Amazon S3 destination with Amazon Redshift) or change the parameters associated with a destination (for example, to change the bucket name of the Amazon S3 destination). The update might not occur immediately. The target Firehose stream remains active while the configurations are updated, so data writes to the Firehose stream can continue during this process. The updated configurations are usually effective within a few minutes. Switching between Amazon OpenSearch Service and other services is not supported. For an Amazon OpenSearch Service destination, you can only update to another Amazon OpenSearch Service destination. If the destination type is the same, Firehose merges the configuration parameters specified with the destination configuration that already exists on the delivery stream. If any of the parameters are not specified in the call, the existing values are retained. For example, in the Amazon S3 destination, if EncryptionConfiguration is not specified, then the existing EncryptionConfiguration is maintained on the destination. If the destination type is not the same, for example, changing the destination from Amazon S3 to Amazon Redshift, Firehose does not merge any parameters. In this case, all parameters must be specified. Firehose uses CurrentDeliveryStreamVersionId to avoid race conditions and conflicting merges. This is a required field, and the service updates the configuration only if the existing configuration has a version ID that matches. After the update is applied successfully, the version ID is updated, and can be retrieved using DescribeDeliveryStream. Use the new version ID to set CurrentDeliveryStreamVersionId in the next call.

```sql
UPDATE aws.firehose.delivery_streams
SET 
DeliveryStreamName = '{{ DeliveryStreamName }}',
CurrentDeliveryStreamVersionId = '{{ CurrentDeliveryStreamVersionId }}',
DestinationId = '{{ DestinationId }}',
S3DestinationUpdate = '{{ S3DestinationUpdate }}',
ExtendedS3DestinationUpdate = '{{ ExtendedS3DestinationUpdate }}',
RedshiftDestinationUpdate = '{{ RedshiftDestinationUpdate }}',
ElasticsearchDestinationUpdate = '{{ ElasticsearchDestinationUpdate }}',
AmazonopensearchserviceDestinationUpdate = '{{ AmazonopensearchserviceDestinationUpdate }}',
SplunkDestinationUpdate = '{{ SplunkDestinationUpdate }}',
HttpEndpointDestinationUpdate = '{{ HttpEndpointDestinationUpdate }}',
AmazonOpenSearchServerlessDestinationUpdate = '{{ AmazonOpenSearchServerlessDestinationUpdate }}',
SnowflakeDestinationUpdate = '{{ SnowflakeDestinationUpdate }}',
IcebergDestinationUpdate = '{{ IcebergDestinationUpdate }}'
WHERE 
region = '{{ region }}' --required
AND DeliveryStreamName = '{{ DeliveryStreamName }}' --required
AND CurrentDeliveryStreamVersionId = '{{ CurrentDeliveryStreamVersionId }}' --required
AND DestinationId = '{{ DestinationId }}' --required;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="put_record"
    values={[
        { label: 'put_record', value: 'put_record' },
        { label: 'put_record_batch', value: 'put_record_batch' }
    ]}
>
<TabItem value="put_record">

Writes a single data record into an Firehose stream. To write multiple data records into a Firehose stream, use PutRecordBatch. Applications using these operations are referred to as producers. By default, each Firehose stream can take in up to 2,000 transactions per second, 5,000 records per second, or 5 MB per second. If you use PutRecord and PutRecordBatch, the limits are an aggregate across these two operations for each Firehose stream. For more information about limits and how to request an increase, see Amazon Firehose Limits. Firehose accumulates and publishes a particular metric for a customer account in one minute intervals. It is possible that the bursts of incoming bytes/records ingested to a Firehose stream last only for a few seconds. Due to this, the actual spikes in the traffic might not be fully visible in the customer's 1 minute CloudWatch metrics. You must specify the name of the Firehose stream and the data record when using PutRecord. The data record consists of a data blob that can be up to 1,000 KiB in size, and any kind of data. For example, it can be a segment from a log file, geographic location data, website clickstream data, and so on. For multi record de-aggregation, you can not put more than 500 records even if the data blob length is less than 1000 KiB. If you include more than 500 records, the request succeeds but the record de-aggregation doesn't work as expected and transformation lambda is invoked with the complete base64 encoded data blob instead of de-aggregated base64 decoded records. Firehose buffers records before delivering them to the destination. To disambiguate the data blobs at the destination, a common solution is to use delimiters in the data, such as a newline (\n) or some other character unique within the data. This allows the consumer application to parse individual data items when reading the data from the destination. The PutRecord operation returns a RecordId, which is a unique string assigned to each record. Producer applications can use this ID for purposes such as auditability and investigation. If the PutRecord operation throws a ServiceUnavailableException, the API is automatically reinvoked (retried) 3 times. If the exception persists, it is possible that the throughput limits have been exceeded for the Firehose stream. Re-invoking the Put API operations (for example, PutRecord and PutRecordBatch) can result in data duplicates. For larger data assets, allow for a longer time out before retrying Put API operations. Data records sent to Firehose are stored for 24 hours from the time they are added to a Firehose stream as it tries to send the records to the destination. If the destination is unreachable for more than 24 hours, the data is no longer available. Don't concatenate two or more base64 strings to form the data fields of your records. Instead, concatenate the raw data, then perform base64 encoding.

```sql
REPLACE aws.firehose.delivery_streams
SET 
DeliveryStreamName = '{{ DeliveryStreamName }}',
Record = '{{ Record }}'
WHERE 
region = '{{ region }}' --required
AND DeliveryStreamName = '{{ DeliveryStreamName }}' --required
AND Record = '{{ Record }}' --required
RETURNING
encrypted,
record_id;
```
</TabItem>
<TabItem value="put_record_batch">

Writes multiple data records into a Firehose stream in a single call, which can achieve higher throughput per producer than when writing single records. To write single data records into a Firehose stream, use PutRecord. Applications using these operations are referred to as producers. Firehose accumulates and publishes a particular metric for a customer account in one minute intervals. It is possible that the bursts of incoming bytes/records ingested to a Firehose stream last only for a few seconds. Due to this, the actual spikes in the traffic might not be fully visible in the customer's 1 minute CloudWatch metrics. For information about service quota, see Amazon Firehose Quota. Each PutRecordBatch request supports up to 500 records. Each record in the request can be as large as 1,000 KB (before base64 encoding), up to a limit of 4 MB for the entire request. These limits cannot be changed. You must specify the name of the Firehose stream and the data record when using PutRecord. The data record consists of a data blob that can be up to 1,000 KB in size, and any kind of data. For example, it could be a segment from a log file, geographic location data, website clickstream data, and so on. For multi record de-aggregation, you can not put more than 500 records even if the data blob length is less than 1000 KiB. If you include more than 500 records, the request succeeds but the record de-aggregation doesn't work as expected and transformation lambda is invoked with the complete base64 encoded data blob instead of de-aggregated base64 decoded records. Firehose buffers records before delivering them to the destination. To disambiguate the data blobs at the destination, a common solution is to use delimiters in the data, such as a newline (\n) or some other character unique within the data. This allows the consumer application to parse individual data items when reading the data from the destination. The PutRecordBatch response includes a count of failed records, FailedPutCount, and an array of responses, RequestResponses. Even if the PutRecordBatch call succeeds, the value of FailedPutCount may be greater than 0, indicating that there are records for which the operation didn't succeed. Each entry in the RequestResponses array provides additional information about the processed record. It directly correlates with a record in the request array using the same ordering, from the top to the bottom. The response array always includes the same number of records as the request array. RequestResponses includes both successfully and unsuccessfully processed records. Firehose tries to process all records in each PutRecordBatch request. A single record failure does not stop the processing of subsequent records. A successfully processed record includes a RecordId value, which is unique for the record. An unsuccessfully processed record includes ErrorCode and ErrorMessage values. ErrorCode reflects the type of error, and is one of the following values: ServiceUnavailableException or InternalFailure. ErrorMessage provides more detailed information about the error. If there is an internal server error or a timeout, the write might have completed or it might have failed. If FailedPutCount is greater than 0, retry the request, resending only those records that might have failed processing. This minimizes the possible duplicate records and also reduces the total bytes sent (and corresponding charges). We recommend that you handle any duplicates at the destination. If PutRecordBatch throws ServiceUnavailableException, the API is automatically reinvoked (retried) 3 times. If the exception persists, it is possible that the throughput limits have been exceeded for the Firehose stream. Re-invoking the Put API operations (for example, PutRecord and PutRecordBatch) can result in data duplicates. For larger data assets, allow for a longer time out before retrying Put API operations. Data records sent to Firehose are stored for 24 hours from the time they are added to a Firehose stream as it attempts to send the records to the destination. If the destination is unreachable for more than 24 hours, the data is no longer available. Don't concatenate two or more base64 strings to form the data fields of your records. Instead, concatenate the raw data, then perform base64 encoding.

```sql
REPLACE aws.firehose.delivery_streams
SET 
DeliveryStreamName = '{{ DeliveryStreamName }}',
Records = '{{ Records }}'
WHERE 
region = '{{ region }}' --required
AND DeliveryStreamName = '{{ DeliveryStreamName }}' --required
AND Records = '{{ Records }}' --required
RETURNING
encrypted,
failed_put_count,
request_responses;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_delivery_stream"
    values={[
        { label: 'delete_delivery_stream', value: 'delete_delivery_stream' }
    ]}
>
<TabItem value="delete_delivery_stream">

Deletes a Firehose stream and its data. You can delete a Firehose stream only if it is in one of the following states: ACTIVE, DELETING, CREATING_FAILED, or DELETING_FAILED. You can't delete a Firehose stream that is in the CREATING state. To check the state of a Firehose stream, use DescribeDeliveryStream. DeleteDeliveryStream is an asynchronous API. When an API request to DeleteDeliveryStream succeeds, the Firehose stream is marked for deletion, and it goes into the DELETING state.While the Firehose stream is in the DELETING state, the service might continue to accept records, but it doesn't make any guarantees with respect to delivering the data. Therefore, as a best practice, first stop any applications that are sending records before you delete a Firehose stream. Removal of a Firehose stream that is in the DELETING state is a low priority operation for the service. A stream may remain in the DELETING state for several minutes. Therefore, as a best practice, applications should not wait for streams in the DELETING state to be removed.

```sql
DELETE FROM aws.firehose.delivery_streams
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="start_delivery_stream_encryption"
    values={[
        { label: 'start_delivery_stream_encryption', value: 'start_delivery_stream_encryption' },
        { label: 'stop_delivery_stream_encryption', value: 'stop_delivery_stream_encryption' }
    ]}
>
<TabItem value="start_delivery_stream_encryption">

Enables server-side encryption (SSE) for the Firehose stream. This operation is asynchronous. It returns immediately. When you invoke it, Firehose first sets the encryption status of the stream to ENABLING, and then to ENABLED. The encryption status of a Firehose stream is the Status property in DeliveryStreamEncryptionConfiguration. If the operation fails, the encryption status changes to ENABLING_FAILED. You can continue to read and write data to your Firehose stream while the encryption status is ENABLING, but the data is not encrypted. It can take up to 5 seconds after the encryption status changes to ENABLED before all records written to the Firehose stream are encrypted. To find out whether a record or a batch of records was encrypted, check the response elements PutRecordOutput$Encrypted and PutRecordBatchOutput$Encrypted, respectively. To check the encryption status of a Firehose stream, use DescribeDeliveryStream. Even if encryption is currently enabled for a Firehose stream, you can still invoke this operation on it to change the ARN of the CMK or both its type and ARN. If you invoke this method to change the CMK, and the old CMK is of type CUSTOMER_MANAGED_CMK, Firehose schedules the grant it had on the old CMK for retirement. If the new CMK is of type CUSTOMER_MANAGED_CMK, Firehose creates a grant that enables it to use the new CMK to encrypt and decrypt data and to manage the grant. For the KMS grant creation to be successful, the Firehose API operations StartDeliveryStreamEncryption and CreateDeliveryStream should not be called with session credentials that are more than 6 hours old. If a Firehose stream already has encryption enabled and then you invoke this operation to change the ARN of the CMK or both its type and ARN and you get ENABLING_FAILED, this only means that the attempt to change the CMK failed. In this case, encryption remains enabled with the old CMK. If the encryption status of your Firehose stream is ENABLING_FAILED, you can invoke this operation again with a valid CMK. The CMK must be enabled and the key policy mustn't explicitly deny the permission for Firehose to invoke KMS encrypt and decrypt operations. You can enable SSE for a Firehose stream only if it's a Firehose stream that uses DirectPut as its source. The StartDeliveryStreamEncryption and StopDeliveryStreamEncryption operations have a combined limit of 25 calls per Firehose stream per 24 hours. For example, you reach the limit if you call StartDeliveryStreamEncryption 13 times and StopDeliveryStreamEncryption 12 times for the same Firehose stream in a 24-hour period.

```sql
EXEC aws.firehose.delivery_streams.start_delivery_stream_encryption 
@region='{{ region }}' --required 
@@json=
'{
"DeliveryStreamName": "{{ DeliveryStreamName }}", 
"DeliveryStreamEncryptionConfigurationInput": "{{ DeliveryStreamEncryptionConfigurationInput }}"
}'
;
```
</TabItem>
<TabItem value="stop_delivery_stream_encryption">

Disables server-side encryption (SSE) for the Firehose stream. This operation is asynchronous. It returns immediately. When you invoke it, Firehose first sets the encryption status of the stream to DISABLING, and then to DISABLED. You can continue to read and write data to your stream while its status is DISABLING. It can take up to 5 seconds after the encryption status changes to DISABLED before all records written to the Firehose stream are no longer subject to encryption. To find out whether a record or a batch of records was encrypted, check the response elements PutRecordOutput$Encrypted and PutRecordBatchOutput$Encrypted, respectively. To check the encryption state of a Firehose stream, use DescribeDeliveryStream. If SSE is enabled using a customer managed CMK and then you invoke StopDeliveryStreamEncryption, Firehose schedules the related KMS grant for retirement and then retires it after it ensures that it is finished delivering records to the destination. The StartDeliveryStreamEncryption and StopDeliveryStreamEncryption operations have a combined limit of 25 calls per Firehose stream per 24 hours. For example, you reach the limit if you call StartDeliveryStreamEncryption 13 times and StopDeliveryStreamEncryption 12 times for the same Firehose stream in a 24-hour period.

```sql
EXEC aws.firehose.delivery_streams.stop_delivery_stream_encryption 
@region='{{ region }}' --required 
@@json=
'{
"DeliveryStreamName": "{{ DeliveryStreamName }}"
}'
;
```
</TabItem>
</Tabs>
