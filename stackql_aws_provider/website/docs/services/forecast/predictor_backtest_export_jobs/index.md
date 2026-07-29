--- 
title: predictor_backtest_export_jobs
hide_title: false
hide_table_of_contents: false
keywords:
  - predictor_backtest_export_jobs
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

Creates, updates, deletes, gets or lists a <code>predictor_backtest_export_jobs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="predictor_backtest_export_jobs" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.forecast.predictor_backtest_export_jobs" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_predictor_backtest_export_job"
    values={[
        { label: 'describe_predictor_backtest_export_job', value: 'describe_predictor_backtest_export_job' },
        { label: 'list_predictor_backtest_export_jobs', value: 'list_predictor_backtest_export_jobs' }
    ]}
>
<TabItem value="describe_predictor_backtest_export_job">

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
    <td><CopyableCode code="creation_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>When the predictor backtest export job was created.</td>
</tr>
<tr>
    <td><CopyableCode code="destination" /></td>
    <td><code>object</code></td>
    <td>The destination for an export job. Provide an S3 path, an Identity and Access Management (IAM) role that allows Amazon Forecast to access the location, and an Key Management Service (KMS) key (optional).</td>
</tr>
<tr>
    <td><CopyableCode code="format" /></td>
    <td><code>string</code></td>
    <td>The format of the exported data, CSV or PARQUET. (pattern: &lt;code&gt;^CSV|PARQUET$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="last_modification_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The last time the resource was modified. The timestamp depends on the status of the job: CREATE_PENDING - The CreationTime. CREATE_IN_PROGRESS - The current timestamp. CREATE_STOPPING - The current timestamp. CREATE_STOPPED - When the job stopped. ACTIVE or CREATE_FAILED - When the job finished or failed.</td>
</tr>
<tr>
    <td><CopyableCode code="message" /></td>
    <td><code>string</code></td>
    <td>Information about any errors that may have occurred during the backtest export.</td>
</tr>
<tr>
    <td><CopyableCode code="predictor_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the predictor. (pattern: &lt;code&gt;arn:(&#91;a-z\d-&#93;+):forecast:.*:.*:.+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="predictor_backtest_export_job_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the predictor backtest export job. (pattern: &lt;code&gt;arn:(&#91;a-z\d-&#93;+):forecast:.*:.*:.+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="predictor_backtest_export_job_name" /></td>
    <td><code>string</code></td>
    <td>The name of the predictor backtest export job. (pattern: &lt;code&gt;^&#91;a-zA-Z&#93;&#91;a-zA-Z0-9_&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the predictor backtest export job. States include: ACTIVE CREATE_PENDING, CREATE_IN_PROGRESS, CREATE_FAILED CREATE_STOPPING, CREATE_STOPPED DELETE_PENDING, DELETE_IN_PROGRESS, DELETE_FAILED</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_predictor_backtest_export_jobs">

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
    <td><CopyableCode code="creation_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>When the predictor backtest export job was created.</td>
</tr>
<tr>
    <td><CopyableCode code="destination" /></td>
    <td><code>object</code></td>
    <td>The destination for an export job. Provide an S3 path, an Identity and Access Management (IAM) role that allows Amazon Forecast to access the location, and an Key Management Service (KMS) key (optional).</td>
</tr>
<tr>
    <td><CopyableCode code="last_modification_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The last time the resource was modified. The timestamp depends on the status of the job: CREATE_PENDING - The CreationTime. CREATE_IN_PROGRESS - The current timestamp. CREATE_STOPPING - The current timestamp. CREATE_STOPPED - When the job stopped. ACTIVE or CREATE_FAILED - When the job finished or failed.</td>
</tr>
<tr>
    <td><CopyableCode code="message" /></td>
    <td><code>string</code></td>
    <td>Information about any errors that may have occurred during the backtest export.</td>
</tr>
<tr>
    <td><CopyableCode code="predictor_backtest_export_job_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the predictor backtest export job. (pattern: &lt;code&gt;arn:(&#91;a-z\d-&#93;+):forecast:.*:.*:.+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="predictor_backtest_export_job_name" /></td>
    <td><code>string</code></td>
    <td>The name of the predictor backtest export job. (pattern: &lt;code&gt;^&#91;a-zA-Z&#93;&#91;a-zA-Z0-9_&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the predictor backtest export job. States include: ACTIVE CREATE_PENDING, CREATE_IN_PROGRESS, CREATE_FAILED CREATE_STOPPING, CREATE_STOPPED DELETE_PENDING, DELETE_IN_PROGRESS, DELETE_FAILED</td>
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
    <td><a href="#describe_predictor_backtest_export_job"><CopyableCode code="describe_predictor_backtest_export_job" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Describes a predictor backtest export job created using the CreatePredictorBacktestExportJob operation. In addition to listing the properties provided by the user in the CreatePredictorBacktestExportJob request, this operation lists the following properties: CreationTime LastModificationTime Status Message (if an error occurred)</td>
</tr>
<tr>
    <td><a href="#list_predictor_backtest_export_jobs"><CopyableCode code="list_predictor_backtest_export_jobs" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns a list of predictor backtest export jobs created using the CreatePredictorBacktestExportJob operation. This operation returns a summary for each backtest export job. You can filter the list using an array of Filter objects. To retrieve the complete set of properties for a particular backtest export job, use the ARN with the DescribePredictorBacktestExportJob operation.</td>
</tr>
<tr>
    <td><a href="#create_predictor_backtest_export_job"><CopyableCode code="create_predictor_backtest_export_job" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-PredictorBacktestExportJobName"><code>PredictorBacktestExportJobName</code></a>, <a href="#parameter-PredictorArn"><code>PredictorArn</code></a></td>
    <td></td>
    <td>Exports backtest forecasts and accuracy metrics generated by the CreateAutoPredictor or CreatePredictor operations. Two folders containing CSV or Parquet files are exported to your specified S3 bucket. The export file names will match the following conventions: <code>&lt;ExportJobName&gt;</code>_<code>&lt;ExportTimestamp&gt;</code>_<code>&lt;PartNumber&gt;</code>.csv The <code>&lt;ExportTimestamp&gt;</code> component is in Java SimpleDate format (yyyy-MM-ddTHH-mm-ssZ). You must specify a DataDestination object that includes an Amazon S3 bucket and an Identity and Access Management (IAM) role that Amazon Forecast can assume to access the Amazon S3 bucket. For more information, see aws-forecast-iam-roles. The Status of the export job must be ACTIVE before you can access the export in your Amazon S3 bucket. To get the status, use the DescribePredictorBacktestExportJob operation.</td>
</tr>
<tr>
    <td><a href="#delete_predictor_backtest_export_job"><CopyableCode code="delete_predictor_backtest_export_job" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a predictor backtest export job.</td>
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
    defaultValue="describe_predictor_backtest_export_job"
    values={[
        { label: 'describe_predictor_backtest_export_job', value: 'describe_predictor_backtest_export_job' },
        { label: 'list_predictor_backtest_export_jobs', value: 'list_predictor_backtest_export_jobs' }
    ]}
>
<TabItem value="describe_predictor_backtest_export_job">

Describes a predictor backtest export job created using the CreatePredictorBacktestExportJob operation. In addition to listing the properties provided by the user in the CreatePredictorBacktestExportJob request, this operation lists the following properties: CreationTime LastModificationTime Status Message (if an error occurred)

```sql
SELECT
creation_time,
destination,
format,
last_modification_time,
message,
predictor_arn,
predictor_backtest_export_job_arn,
predictor_backtest_export_job_name,
status
FROM aws.forecast.predictor_backtest_export_jobs
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_predictor_backtest_export_jobs">

Returns a list of predictor backtest export jobs created using the CreatePredictorBacktestExportJob operation. This operation returns a summary for each backtest export job. You can filter the list using an array of Filter objects. To retrieve the complete set of properties for a particular backtest export job, use the ARN with the DescribePredictorBacktestExportJob operation.

```sql
SELECT
creation_time,
destination,
last_modification_time,
message,
predictor_backtest_export_job_arn,
predictor_backtest_export_job_name,
status
FROM aws.forecast.predictor_backtest_export_jobs
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_predictor_backtest_export_job"
    values={[
        { label: 'create_predictor_backtest_export_job', value: 'create_predictor_backtest_export_job' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_predictor_backtest_export_job">

Exports backtest forecasts and accuracy metrics generated by the CreateAutoPredictor or CreatePredictor operations. Two folders containing CSV or Parquet files are exported to your specified S3 bucket. The export file names will match the following conventions: <code>&lt;ExportJobName&gt;</code>_<code>&lt;ExportTimestamp&gt;</code>_<code>&lt;PartNumber&gt;</code>.csv The <code>&lt;ExportTimestamp&gt;</code> component is in Java SimpleDate format (yyyy-MM-ddTHH-mm-ssZ). You must specify a DataDestination object that includes an Amazon S3 bucket and an Identity and Access Management (IAM) role that Amazon Forecast can assume to access the Amazon S3 bucket. For more information, see aws-forecast-iam-roles. The Status of the export job must be ACTIVE before you can access the export in your Amazon S3 bucket. To get the status, use the DescribePredictorBacktestExportJob operation.

```sql
INSERT INTO aws.forecast.predictor_backtest_export_jobs (
PredictorBacktestExportJobName,
PredictorArn,
Destination,
Tags,
Format,
region
)
SELECT 
'{{ PredictorBacktestExportJobName }}' /* required */,
'{{ PredictorArn }}' /* required */,
'{{ Destination }}',
'{{ Tags }}',
'{{ Format }}',
'{{ region }}'
RETURNING
predictor_backtest_export_job_arn
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: predictor_backtest_export_jobs
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the predictor_backtest_export_jobs resource.
    - name: PredictorBacktestExportJobName
      value: "{{ PredictorBacktestExportJobName }}"
      description: |
        The name for the backtest export job.
    - name: PredictorArn
      value: "{{ PredictorArn }}"
      description: |
        The Amazon Resource Name (ARN) of the predictor that you want to export.
    - name: Destination
      description: |
        The destination for an export job. Provide an S3 path, an Identity and Access Management (IAM) role that allows Amazon Forecast to access the location, and an Key Management Service (KMS) key (optional).
      value:
        S3Config:
          Path: "{{ Path }}"
          RoleArn: "{{ RoleArn }}"
          KMSKeyArn: "{{ KMSKeyArn }}"
    - name: Tags
      description: |
        Optional metadata to help you categorize and organize your backtests. Each tag consists of a key and an optional value, both of which you define. Tag keys and values are case sensitive. The following restrictions apply to tags: For each resource, each tag key must be unique and each tag key must have one value. Maximum number of tags per resource: 50. Maximum key length: 128 Unicode characters in UTF-8. Maximum value length: 256 Unicode characters in UTF-8. Accepted characters: all letters and numbers, spaces representable in UTF-8, and + - = . _ : / @. If your tagging schema is used across other services and resources, the character restrictions of those services also apply. Key prefixes cannot include any upper or lowercase combination of aws: or AWS:. Values can have this prefix. If a tag value has aws as its prefix but the key does not, Forecast considers it to be a user tag and will count against the limit of 50 tags. Tags with only the key prefix of aws do not count against your tags per resource limit. You cannot edit or delete tag keys with this prefix.
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
    - name: Format
      value: "{{ Format }}"
      description: |
        The format of the exported data, CSV or PARQUET. The default value is CSV.
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_predictor_backtest_export_job"
    values={[
        { label: 'delete_predictor_backtest_export_job', value: 'delete_predictor_backtest_export_job' }
    ]}
>
<TabItem value="delete_predictor_backtest_export_job">

Deletes a predictor backtest export job.

```sql
DELETE FROM aws.forecast.predictor_backtest_export_jobs
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
