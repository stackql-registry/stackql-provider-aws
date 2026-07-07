--- 
title: dataset_import_jobs
hide_title: false
hide_table_of_contents: false
keywords:
  - dataset_import_jobs
  - forecast
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

Creates, updates, deletes, gets or lists a <code>dataset_import_jobs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="dataset_import_jobs" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.forecast.dataset_import_jobs" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_dataset_import_job"
    values={[
        { label: 'describe_dataset_import_job', value: 'describe_dataset_import_job' },
        { label: 'list_dataset_import_jobs', value: 'list_dataset_import_jobs' }
    ]}
>
<TabItem value="describe_dataset_import_job">

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
    <td><CopyableCode code="CreationTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>When the dataset import job was created.</td>
</tr>
<tr>
    <td><CopyableCode code="DataSize" /></td>
    <td><code>number (double)</code></td>
    <td>The size of the dataset in gigabytes (GB) after the import job has finished.</td>
</tr>
<tr>
    <td><CopyableCode code="DataSource" /></td>
    <td><code>object</code></td>
    <td>The source of your data, an Identity and Access Management (IAM) role that allows Amazon Forecast to access the data and, optionally, an Key Management Service (KMS) key.</td>
</tr>
<tr>
    <td><CopyableCode code="DatasetArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the dataset that the training data was imported to. (pattern: &lt;code&gt;arn:(&#91;a-z\d-&#93;+):forecast:.*:.*:.+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="DatasetImportJobArn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the dataset import job. (pattern: &lt;code&gt;arn:(&#91;a-z\d-&#93;+):forecast:.*:.*:.+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="DatasetImportJobName" /></td>
    <td><code>string</code></td>
    <td>The name of the dataset import job. (pattern: &lt;code&gt;^&#91;a-zA-Z&#93;&#91;a-zA-Z0-9_&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="EstimatedTimeRemainingInMinutes" /></td>
    <td><code>integer (int64)</code></td>
    <td>The estimated time remaining in minutes for the dataset import job to complete.</td>
</tr>
<tr>
    <td><CopyableCode code="FieldStatistics" /></td>
    <td><code>object</code></td>
    <td>Statistical information about each field in the input data.</td>
</tr>
<tr>
    <td><CopyableCode code="Format" /></td>
    <td><code>string</code></td>
    <td>The format of the imported data, CSV or PARQUET. (pattern: &lt;code&gt;^CSV|PARQUET$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="GeolocationFormat" /></td>
    <td><code>string</code></td>
    <td>The format of the geolocation attribute. Valid Values:"LAT_LONG" and "CC_POSTALCODE". (pattern: &lt;code&gt;^&#91;a-zA-Z0-9_&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="ImportMode" /></td>
    <td><code>string</code></td>
    <td>The import mode of the dataset import job, FULL or INCREMENTAL. (FULL, INCREMENTAL)</td>
</tr>
<tr>
    <td><CopyableCode code="LastModificationTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The last time the resource was modified. The timestamp depends on the status of the job: CREATE_PENDING - The CreationTime. CREATE_IN_PROGRESS - The current timestamp. CREATE_STOPPING - The current timestamp. CREATE_STOPPED - When the job stopped. ACTIVE or CREATE_FAILED - When the job finished or failed.</td>
</tr>
<tr>
    <td><CopyableCode code="Message" /></td>
    <td><code>string</code></td>
    <td>If an error occurred, an informational message about the error.</td>
</tr>
<tr>
    <td><CopyableCode code="Status" /></td>
    <td><code>string</code></td>
    <td>The status of the dataset import job. States include: ACTIVE CREATE_PENDING, CREATE_IN_PROGRESS, CREATE_FAILED DELETE_PENDING, DELETE_IN_PROGRESS, DELETE_FAILED CREATE_STOPPING, CREATE_STOPPED</td>
</tr>
<tr>
    <td><CopyableCode code="TimeZone" /></td>
    <td><code>string</code></td>
    <td>The single time zone applied to every item in the dataset (pattern: &lt;code&gt;^&#91;a-zA-Z0-9\/\+\-\_&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="TimestampFormat" /></td>
    <td><code>string</code></td>
    <td>The format of timestamps in the dataset. The format that you specify depends on the DataFrequency specified when the dataset was created. The following formats are supported "yyyy-MM-dd" For the following data frequencies: Y, M, W, and D "yyyy-MM-dd HH:mm:ss" For the following data frequencies: H, 30min, 15min, and 1min; and optionally, for: Y, M, W, and D (pattern: &lt;code&gt;^&#91;a-zA-Z0-9\-\:\.\,\'\s&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="UseGeolocationForTimeZone" /></td>
    <td><code>boolean</code></td>
    <td>Whether TimeZone is automatically derived from the geolocation attribute.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_dataset_import_jobs">

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
    <td><CopyableCode code="CreationTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>When the dataset import job was created.</td>
</tr>
<tr>
    <td><CopyableCode code="DataSource" /></td>
    <td><code>object</code></td>
    <td>The source of your data, an Identity and Access Management (IAM) role that allows Amazon Forecast to access the data and, optionally, an Key Management Service (KMS) key.</td>
</tr>
<tr>
    <td><CopyableCode code="DatasetImportJobArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the dataset import job. (pattern: &lt;code&gt;arn:(&#91;a-z\d-&#93;+):forecast:.*:.*:.+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="DatasetImportJobName" /></td>
    <td><code>string</code></td>
    <td>The name of the dataset import job. (pattern: &lt;code&gt;^&#91;a-zA-Z&#93;&#91;a-zA-Z0-9_&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="ImportMode" /></td>
    <td><code>string</code></td>
    <td>The import mode of the dataset import job, FULL or INCREMENTAL. (FULL, INCREMENTAL)</td>
</tr>
<tr>
    <td><CopyableCode code="LastModificationTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The last time the resource was modified. The timestamp depends on the status of the job: CREATE_PENDING - The CreationTime. CREATE_IN_PROGRESS - The current timestamp. CREATE_STOPPING - The current timestamp. CREATE_STOPPED - When the job stopped. ACTIVE or CREATE_FAILED - When the job finished or failed.</td>
</tr>
<tr>
    <td><CopyableCode code="Message" /></td>
    <td><code>string</code></td>
    <td>If an error occurred, an informational message about the error.</td>
</tr>
<tr>
    <td><CopyableCode code="Status" /></td>
    <td><code>string</code></td>
    <td>The status of the dataset import job. States include: ACTIVE CREATE_PENDING, CREATE_IN_PROGRESS, CREATE_FAILED DELETE_PENDING, DELETE_IN_PROGRESS, DELETE_FAILED CREATE_STOPPING, CREATE_STOPPED</td>
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
    <td><a href="#describe_dataset_import_job"><CopyableCode code="describe_dataset_import_job" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Describes a dataset import job created using the CreateDatasetImportJob operation. In addition to listing the parameters provided in the CreateDatasetImportJob request, this operation includes the following properties: CreationTime LastModificationTime DataSize FieldStatistics Status Message - If an error occurred, information about the error.</td>
</tr>
<tr>
    <td><a href="#list_dataset_import_jobs"><CopyableCode code="list_dataset_import_jobs" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns a list of dataset import jobs created using the CreateDatasetImportJob operation. For each import job, this operation returns a summary of its properties, including its Amazon Resource Name (ARN). You can retrieve the complete set of properties by using the ARN with the DescribeDatasetImportJob operation. You can filter the list by providing an array of Filter objects.</td>
</tr>
<tr>
    <td><a href="#create_dataset_import_job"><CopyableCode code="create_dataset_import_job" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-DatasetImportJobName"><code>DatasetImportJobName</code></a>, <a href="#parameter-DatasetArn"><code>DatasetArn</code></a>, <a href="#parameter-DataSource"><code>DataSource</code></a></td>
    <td></td>
    <td>Imports your training data to an Amazon Forecast dataset. You provide the location of your training data in an Amazon Simple Storage Service (Amazon S3) bucket and the Amazon Resource Name (ARN) of the dataset that you want to import the data to. You must specify a DataSource object that includes an Identity and Access Management (IAM) role that Amazon Forecast can assume to access the data, as Amazon Forecast makes a copy of your data and processes it in an internal Amazon Web Services system. For more information, see Set up permissions. The training data must be in CSV or Parquet format. The delimiter must be a comma (,). You can specify the path to a specific file, the S3 bucket, or to a folder in the S3 bucket. For the latter two cases, Amazon Forecast imports all files up to the limit of 10,000 files. Because dataset imports are not aggregated, your most recent dataset import is the one that is used when training a predictor or generating a forecast. Make sure that your most recent dataset import contains all of the data you want to model off of, and not just the new data collected since the previous import. To get a list of all your dataset import jobs, filtered by specified criteria, use the ListDatasetImportJobs operation.</td>
</tr>
<tr>
    <td><a href="#delete_dataset_import_job"><CopyableCode code="delete_dataset_import_job" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a dataset import job created using the CreateDatasetImportJob operation. You can delete only dataset import jobs that have a status of ACTIVE or CREATE_FAILED. To get the status, use the DescribeDatasetImportJob operation.</td>
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
    defaultValue="describe_dataset_import_job"
    values={[
        { label: 'describe_dataset_import_job', value: 'describe_dataset_import_job' },
        { label: 'list_dataset_import_jobs', value: 'list_dataset_import_jobs' }
    ]}
>
<TabItem value="describe_dataset_import_job">

Describes a dataset import job created using the CreateDatasetImportJob operation. In addition to listing the parameters provided in the CreateDatasetImportJob request, this operation includes the following properties: CreationTime LastModificationTime DataSize FieldStatistics Status Message - If an error occurred, information about the error.

```sql
SELECT
CreationTime,
DataSize,
DataSource,
DatasetArn,
DatasetImportJobArn,
DatasetImportJobName,
EstimatedTimeRemainingInMinutes,
FieldStatistics,
Format,
GeolocationFormat,
ImportMode,
LastModificationTime,
Message,
Status,
TimeZone,
TimestampFormat,
UseGeolocationForTimeZone
FROM aws.forecast.dataset_import_jobs
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_dataset_import_jobs">

Returns a list of dataset import jobs created using the CreateDatasetImportJob operation. For each import job, this operation returns a summary of its properties, including its Amazon Resource Name (ARN). You can retrieve the complete set of properties by using the ARN with the DescribeDatasetImportJob operation. You can filter the list by providing an array of Filter objects.

```sql
SELECT
CreationTime,
DataSource,
DatasetImportJobArn,
DatasetImportJobName,
ImportMode,
LastModificationTime,
Message,
Status
FROM aws.forecast.dataset_import_jobs
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_dataset_import_job"
    values={[
        { label: 'create_dataset_import_job', value: 'create_dataset_import_job' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_dataset_import_job">

Imports your training data to an Amazon Forecast dataset. You provide the location of your training data in an Amazon Simple Storage Service (Amazon S3) bucket and the Amazon Resource Name (ARN) of the dataset that you want to import the data to. You must specify a DataSource object that includes an Identity and Access Management (IAM) role that Amazon Forecast can assume to access the data, as Amazon Forecast makes a copy of your data and processes it in an internal Amazon Web Services system. For more information, see Set up permissions. The training data must be in CSV or Parquet format. The delimiter must be a comma (,). You can specify the path to a specific file, the S3 bucket, or to a folder in the S3 bucket. For the latter two cases, Amazon Forecast imports all files up to the limit of 10,000 files. Because dataset imports are not aggregated, your most recent dataset import is the one that is used when training a predictor or generating a forecast. Make sure that your most recent dataset import contains all of the data you want to model off of, and not just the new data collected since the previous import. To get a list of all your dataset import jobs, filtered by specified criteria, use the ListDatasetImportJobs operation.

```sql
INSERT INTO aws.forecast.dataset_import_jobs (
DatasetImportJobName,
DatasetArn,
DataSource,
TimestampFormat,
TimeZone,
UseGeolocationForTimeZone,
GeolocationFormat,
Tags,
Format,
ImportMode,
region
)
SELECT 
'{{ DatasetImportJobName }}' /* required */,
'{{ DatasetArn }}' /* required */,
'{{ DataSource }}' /* required */,
'{{ TimestampFormat }}',
'{{ TimeZone }}',
{{ UseGeolocationForTimeZone }},
'{{ GeolocationFormat }}',
'{{ Tags }}',
'{{ Format }}',
'{{ ImportMode }}',
'{{ region }}'
RETURNING
DatasetImportJobArn
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: dataset_import_jobs
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the dataset_import_jobs resource.
    - name: DatasetImportJobName
      value: "{{ DatasetImportJobName }}"
      description: |
        The name for the dataset import job. We recommend including the current timestamp in the name, for example, 20190721DatasetImport. This can help you avoid getting a ResourceAlreadyExistsException exception.
    - name: DatasetArn
      value: "{{ DatasetArn }}"
      description: |
        The Amazon Resource Name (ARN) of the Amazon Forecast dataset that you want to import data to.
    - name: DataSource
      description: |
        The location of the training data to import and an Identity and Access Management (IAM) role that Amazon Forecast can assume to access the data. The training data must be stored in an Amazon S3 bucket. If encryption is used, DataSource must include an Key Management Service (KMS) key and the IAM role must allow Amazon Forecast permission to access the key. The KMS key and IAM role must match those specified in the EncryptionConfig parameter of the CreateDataset operation.
      value:
        S3Config:
          Path: "{{ Path }}"
          RoleArn: "{{ RoleArn }}"
          KMSKeyArn: "{{ KMSKeyArn }}"
    - name: TimestampFormat
      value: "{{ TimestampFormat }}"
      description: |
        The format of timestamps in the dataset. The format that you specify depends on the DataFrequency specified when the dataset was created. The following formats are supported "yyyy-MM-dd" For the following data frequencies: Y, M, W, and D "yyyy-MM-dd HH:mm:ss" For the following data frequencies: H, 30min, 15min, and 1min; and optionally, for: Y, M, W, and D If the format isn't specified, Amazon Forecast expects the format to be "yyyy-MM-dd HH:mm:ss".
    - name: TimeZone
      value: "{{ TimeZone }}"
      description: |
        A single time zone for every item in your dataset. This option is ideal for datasets with all timestamps within a single time zone, or if all timestamps are normalized to a single time zone. Refer to the Joda-Time API for a complete list of valid time zone names.
    - name: UseGeolocationForTimeZone
      value: {{ UseGeolocationForTimeZone }}
      description: |
        Automatically derive time zone information from the geolocation attribute. This option is ideal for datasets that contain timestamps in multiple time zones and those timestamps are expressed in local time.
    - name: GeolocationFormat
      value: "{{ GeolocationFormat }}"
      description: |
        The format of the geolocation attribute. The geolocation attribute can be formatted in one of two ways: LAT_LONG - the latitude and longitude in decimal format (Example: 47.61_-122.33). CC_POSTALCODE (US Only) - the country code (US), followed by the 5-digit ZIP code (Example: US_98121).
    - name: Tags
      description: |
        The optional metadata that you apply to the dataset import job to help you categorize and organize them. Each tag consists of a key and an optional value, both of which you define. The following basic restrictions apply to tags: Maximum number of tags per resource - 50. For each resource, each tag key must be unique, and each tag key can have only one value. Maximum key length - 128 Unicode characters in UTF-8. Maximum value length - 256 Unicode characters in UTF-8. If your tagging schema is used across multiple services and resources, remember that other services may have restrictions on allowed characters. Generally allowed characters are: letters, numbers, and spaces representable in UTF-8, and the following characters: + - = . _ : / @. Tag keys and values are case sensitive. Do not use aws:, AWS:, or any upper or lowercase combination of such as a prefix for keys as it is reserved for Amazon Web Services use. You cannot edit or delete tag keys with this prefix. Values can have this prefix. If a tag value has aws as its prefix but the key does not, then Forecast considers it to be a user tag and will count against the limit of 50 tags. Tags with only the key prefix of aws do not count against your tags per resource limit.
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
    - name: Format
      value: "{{ Format }}"
      description: |
        The format of the imported data, CSV or PARQUET. The default value is CSV.
    - name: ImportMode
      value: "{{ ImportMode }}"
      description: |
        Specifies whether the dataset import job is a FULL or INCREMENTAL import. A FULL dataset import replaces all of the existing data with the newly imported data. An INCREMENTAL import appends the imported data to the existing data.
      valid_values: ['FULL', 'INCREMENTAL']
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_dataset_import_job"
    values={[
        { label: 'delete_dataset_import_job', value: 'delete_dataset_import_job' }
    ]}
>
<TabItem value="delete_dataset_import_job">

Deletes a dataset import job created using the CreateDatasetImportJob operation. You can delete only dataset import jobs that have a status of ACTIVE or CREATE_FAILED. To get the status, use the DescribeDatasetImportJob operation.

```sql
DELETE FROM aws.forecast.dataset_import_jobs
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
