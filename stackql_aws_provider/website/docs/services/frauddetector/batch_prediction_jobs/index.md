--- 
title: batch_prediction_jobs
hide_title: false
hide_table_of_contents: false
keywords:
  - batch_prediction_jobs
  - frauddetector
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

Creates, updates, deletes, gets or lists a <code>batch_prediction_jobs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="batch_prediction_jobs" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.frauddetector.batch_prediction_jobs" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_batch_prediction_jobs"
    values={[
        { label: 'get_batch_prediction_jobs', value: 'get_batch_prediction_jobs' }
    ]}
>
<TabItem value="get_batch_prediction_jobs">

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
    <td><CopyableCode code="batch_predictions" /></td>
    <td><code>array</code></td>
    <td>An array containing the details of each batch prediction job.</td>
</tr>
<tr>
    <td><CopyableCode code="next_token" /></td>
    <td><code>string</code></td>
    <td>The next token for the subsequent request.</td>
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
    <td><a href="#get_batch_prediction_jobs"><CopyableCode code="get_batch_prediction_jobs" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets all batch prediction jobs or a specific job if you specify a job ID. This is a paginated API. If you provide a null maxResults, this action retrieves a maximum of 50 records per page. If you provide a maxResults, the value must be between 1 and 50. To get the next page results, provide the pagination token from the GetBatchPredictionJobsResponse as part of your request. A null pagination token fetches the records from the beginning.</td>
</tr>
<tr>
    <td><a href="#create_batch_prediction_job"><CopyableCode code="create_batch_prediction_job" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-jobId"><code>jobId</code></a>, <a href="#parameter-inputPath"><code>inputPath</code></a>, <a href="#parameter-outputPath"><code>outputPath</code></a>, <a href="#parameter-eventTypeName"><code>eventTypeName</code></a>, <a href="#parameter-detectorName"><code>detectorName</code></a>, <a href="#parameter-iamRoleArn"><code>iamRoleArn</code></a></td>
    <td></td>
    <td>Creates a batch prediction job.</td>
</tr>
<tr>
    <td><a href="#delete_batch_prediction_job"><CopyableCode code="delete_batch_prediction_job" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a batch prediction job.</td>
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
    defaultValue="get_batch_prediction_jobs"
    values={[
        { label: 'get_batch_prediction_jobs', value: 'get_batch_prediction_jobs' }
    ]}
>
<TabItem value="get_batch_prediction_jobs">

Gets all batch prediction jobs or a specific job if you specify a job ID. This is a paginated API. If you provide a null maxResults, this action retrieves a maximum of 50 records per page. If you provide a maxResults, the value must be between 1 and 50. To get the next page results, provide the pagination token from the GetBatchPredictionJobsResponse as part of your request. A null pagination token fetches the records from the beginning.

```sql
SELECT
batch_predictions,
next_token
FROM aws.frauddetector.batch_prediction_jobs
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_batch_prediction_job"
    values={[
        { label: 'create_batch_prediction_job', value: 'create_batch_prediction_job' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_batch_prediction_job">

Creates a batch prediction job.

```sql
INSERT INTO aws.frauddetector.batch_prediction_jobs (
jobId,
inputPath,
outputPath,
eventTypeName,
detectorName,
detectorVersion,
iamRoleArn,
tags,
region
)
SELECT 
'{{ jobId }}' /* required */,
'{{ inputPath }}' /* required */,
'{{ outputPath }}' /* required */,
'{{ eventTypeName }}' /* required */,
'{{ detectorName }}' /* required */,
'{{ detectorVersion }}',
'{{ iamRoleArn }}' /* required */,
'{{ tags }}',
'{{ region }}'
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: batch_prediction_jobs
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the batch_prediction_jobs resource.
    - name: jobId
      value: "{{ jobId }}"
      description: |
        The ID of the batch prediction job.
    - name: inputPath
      value: "{{ inputPath }}"
      description: |
        The Amazon S3 location of your training file.
    - name: outputPath
      value: "{{ outputPath }}"
      description: |
        The Amazon S3 location of your output file.
    - name: eventTypeName
      value: "{{ eventTypeName }}"
      description: |
        The name of the event type.
    - name: detectorName
      value: "{{ detectorName }}"
      description: |
        The name of the detector.
    - name: detectorVersion
      value: "{{ detectorVersion }}"
      description: |
        The detector version.
    - name: iamRoleArn
      value: "{{ iamRoleArn }}"
      description: |
        The ARN of the IAM role to use for this job request. The IAM Role must have read permissions to your input S3 bucket and write permissions to your output S3 bucket. For more information about bucket permissions, see User policy examples in the Amazon S3 User Guide.
    - name: tags
      description: |
        A collection of key and value pairs.
      value:
        - key: "{{ key }}"
          value: "{{ value }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_batch_prediction_job"
    values={[
        { label: 'delete_batch_prediction_job', value: 'delete_batch_prediction_job' }
    ]}
>
<TabItem value="delete_batch_prediction_job">

Deletes a batch prediction job.

```sql
DELETE FROM aws.frauddetector.batch_prediction_jobs
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
