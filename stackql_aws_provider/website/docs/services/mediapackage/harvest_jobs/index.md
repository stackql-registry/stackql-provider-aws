--- 
title: harvest_jobs
hide_title: false
hide_table_of_contents: false
keywords:
  - harvest_jobs
  - mediapackage
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

Creates, updates, deletes, gets or lists a <code>harvest_jobs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="harvest_jobs" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.mediapackage.harvest_jobs" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_harvest_job"
    values={[
        { label: 'describe_harvest_job', value: 'describe_harvest_job' },
        { label: 'list_harvest_jobs', value: 'list_harvest_jobs' }
    ]}
>
<TabItem value="describe_harvest_job">

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
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) assigned to the HarvestJob.</td>
</tr>
<tr>
    <td><CopyableCode code="channel_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the Channel that the HarvestJob will harvest from.</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string</code></td>
    <td>The date and time the HarvestJob was submitted.</td>
</tr>
<tr>
    <td><CopyableCode code="end_time" /></td>
    <td><code>string</code></td>
    <td>The end of the time-window which will be harvested.</td>
</tr>
<tr>
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The ID of the HarvestJob. The ID must be unique within the region and it cannot be changed after the HarvestJob is submitted.</td>
</tr>
<tr>
    <td><CopyableCode code="origin_endpoint_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the OriginEndpoint that the HarvestJob will harvest from. This cannot be changed after the HarvestJob is submitted.</td>
</tr>
<tr>
    <td><CopyableCode code="s3_destination" /></td>
    <td><code>object</code></td>
    <td>Configuration parameters for where in an S3 bucket to place the harvested content</td>
</tr>
<tr>
    <td><CopyableCode code="start_time" /></td>
    <td><code>string</code></td>
    <td>The start of the time-window which will be harvested.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current status of the HarvestJob. Consider setting up a CloudWatch Event to listen for HarvestJobs as they succeed or fail. In the event of failure, the CloudWatch Event will include an explanation of why the HarvestJob failed. (IN_PROGRESS, SUCCEEDED, FAILED)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_harvest_jobs">

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
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) assigned to the HarvestJob.</td>
</tr>
<tr>
    <td><CopyableCode code="channel_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the Channel that the HarvestJob will harvest from.</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string</code></td>
    <td>The date and time the HarvestJob was submitted.</td>
</tr>
<tr>
    <td><CopyableCode code="end_time" /></td>
    <td><code>string</code></td>
    <td>The end of the time-window which will be harvested.</td>
</tr>
<tr>
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The ID of the HarvestJob. The ID must be unique within the region and it cannot be changed after the HarvestJob is submitted.</td>
</tr>
<tr>
    <td><CopyableCode code="origin_endpoint_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the OriginEndpoint that the HarvestJob will harvest from. This cannot be changed after the HarvestJob is submitted.</td>
</tr>
<tr>
    <td><CopyableCode code="s3_destination" /></td>
    <td><code>object</code></td>
    <td>Configuration parameters for where in an S3 bucket to place the harvested content</td>
</tr>
<tr>
    <td><CopyableCode code="start_time" /></td>
    <td><code>string</code></td>
    <td>The start of the time-window which will be harvested.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current status of the HarvestJob. Consider setting up a CloudWatch Event to listen for HarvestJobs as they succeed or fail. In the event of failure, the CloudWatch Event will include an explanation of why the HarvestJob failed. (IN_PROGRESS, SUCCEEDED, FAILED)</td>
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
    <td><a href="#describe_harvest_job"><CopyableCode code="describe_harvest_job" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets details about an existing HarvestJob.</td>
</tr>
<tr>
    <td><a href="#list_harvest_jobs"><CopyableCode code="list_harvest_jobs" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-includeChannelId"><code>includeChannelId</code></a>, <a href="#parameter-includeStatus"><code>includeStatus</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Returns a collection of HarvestJob records.</td>
</tr>
<tr>
    <td><a href="#create_harvest_job"><CopyableCode code="create_harvest_job" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-EndTime"><code>EndTime</code></a>, <a href="#parameter-OriginEndpointId"><code>OriginEndpointId</code></a>, <a href="#parameter-S3Destination"><code>S3Destination</code></a>, <a href="#parameter-StartTime"><code>StartTime</code></a></td>
    <td></td>
    <td>Creates a new HarvestJob record.</td>
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
<tr id="parameter-id">
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The ID of the HarvestJob.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-includeChannelId">
    <td><CopyableCode code="includeChannelId" /></td>
    <td><code>string</code></td>
    <td>When specified, the request will return only HarvestJobs associated with the given Channel ID.</td>
</tr>
<tr id="parameter-includeStatus">
    <td><CopyableCode code="includeStatus" /></td>
    <td><code>string</code></td>
    <td>When specified, the request will return only HarvestJobs in the given status.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The upper bound on the number of records to return.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>A token used to resume pagination from the end of a previous request.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_harvest_job"
    values={[
        { label: 'describe_harvest_job', value: 'describe_harvest_job' },
        { label: 'list_harvest_jobs', value: 'list_harvest_jobs' }
    ]}
>
<TabItem value="describe_harvest_job">

Gets details about an existing HarvestJob.

```sql
SELECT
arn,
channel_id,
created_at,
end_time,
id,
origin_endpoint_id,
s3_destination,
start_time,
status
FROM aws.mediapackage.harvest_jobs
WHERE id = '{{ id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_harvest_jobs">

Returns a collection of HarvestJob records.

```sql
SELECT
arn,
channel_id,
created_at,
end_time,
id,
origin_endpoint_id,
s3_destination,
start_time,
status
FROM aws.mediapackage.harvest_jobs
WHERE region = '{{ region }}' -- required
AND includeChannelId = '{{ includeChannelId }}'
AND includeStatus = '{{ includeStatus }}'
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_harvest_job"
    values={[
        { label: 'create_harvest_job', value: 'create_harvest_job' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_harvest_job">

Creates a new HarvestJob record.

```sql
INSERT INTO aws.mediapackage.harvest_jobs (
EndTime,
Id,
OriginEndpointId,
S3Destination,
StartTime,
region
)
SELECT 
'{{ EndTime }}' /* required */,
'{{ Id }}',
'{{ OriginEndpointId }}' /* required */,
'{{ S3Destination }}' /* required */,
'{{ StartTime }}' /* required */,
'{{ region }}'
RETURNING
arn,
channel_id,
created_at,
end_time,
id,
origin_endpoint_id,
s3_destination,
start_time,
status
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: harvest_jobs
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the harvest_jobs resource.
    - name: EndTime
      value: "{{ EndTime }}"
    - name: Id
      value: "{{ Id }}"
    - name: OriginEndpointId
      value: "{{ OriginEndpointId }}"
    - name: S3Destination
      description: |
        Configuration parameters for where in an S3 bucket to place the harvested content
      value:
        BucketName: "{{ BucketName }}"
        ManifestKey: "{{ ManifestKey }}"
        RoleArn: "{{ RoleArn }}"
    - name: StartTime
      value: "{{ StartTime }}"
`}</CodeBlock>

</TabItem>
</Tabs>
