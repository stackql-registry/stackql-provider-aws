--- 
title: harvest_jobs
hide_title: false
hide_table_of_contents: false
keywords:
  - harvest_jobs
  - mediapackagev2
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
<tr><td><b>Id</b></td><td><CopyableCode code="aws.mediapackagev2.harvest_jobs" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_harvest_job"
    values={[
        { label: 'get_harvest_job', value: 'get_harvest_job' },
        { label: 'list_harvest_jobs', value: 'list_harvest_jobs' }
    ]}
>
<TabItem value="get_harvest_job">

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
    <td><CopyableCode code="Arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the harvest job.</td>
</tr>
<tr>
    <td><CopyableCode code="ChannelGroupName" /></td>
    <td><code>string</code></td>
    <td>The name of the channel group containing the channel associated with the harvest job. (pattern: &lt;code&gt;&#91;a-zA-Z0-9_-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="ChannelName" /></td>
    <td><code>string</code></td>
    <td>The name of the channel associated with the harvest job. (pattern: &lt;code&gt;&#91;a-zA-Z0-9_-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="CreatedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time when the harvest job was created.</td>
</tr>
<tr>
    <td><CopyableCode code="Description" /></td>
    <td><code>string</code></td>
    <td>The description of the harvest job, if provided.</td>
</tr>
<tr>
    <td><CopyableCode code="Destination" /></td>
    <td><code>object</code></td>
    <td>The S3 destination where the harvested content is being placed.</td>
</tr>
<tr>
    <td><CopyableCode code="ETag" /></td>
    <td><code>string</code></td>
    <td>The current version of the harvest job. Used for concurrency control. (pattern: &lt;code&gt;&#91;\S&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="ErrorMessage" /></td>
    <td><code>string</code></td>
    <td>An error message if the harvest job encountered any issues.</td>
</tr>
<tr>
    <td><CopyableCode code="HarvestJobName" /></td>
    <td><code>string</code></td>
    <td>The name of the harvest job. (pattern: &lt;code&gt;&#91;a-zA-Z0-9_-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="HarvestedManifests" /></td>
    <td><code>object</code></td>
    <td>A list of manifests that are being or have been harvested.</td>
</tr>
<tr>
    <td><CopyableCode code="ModifiedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time when the harvest job was last modified.</td>
</tr>
<tr>
    <td><CopyableCode code="OriginEndpointName" /></td>
    <td><code>string</code></td>
    <td>The name of the origin endpoint associated with the harvest job. (pattern: &lt;code&gt;&#91;a-zA-Z0-9_-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="ScheduleConfiguration" /></td>
    <td><code>object</code></td>
    <td>The configuration for when the harvest job is scheduled to run, including start and end times.</td>
</tr>
<tr>
    <td><CopyableCode code="Status" /></td>
    <td><code>string</code></td>
    <td>The current status of the harvest job (e.g., QUEUED, IN_PROGRESS, CANCELLED, COMPLETED, FAILED). (QUEUED, IN_PROGRESS, CANCELLED, COMPLETED, FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="Tags" /></td>
    <td><code>object</code></td>
    <td>A collection of tags associated with the harvest job.</td>
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
    <td><CopyableCode code="Arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the harvest job.</td>
</tr>
<tr>
    <td><CopyableCode code="ChannelGroupName" /></td>
    <td><code>string</code></td>
    <td>The name of the channel group containing the channel associated with this harvest job. (pattern: &lt;code&gt;&#91;a-zA-Z0-9_-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="ChannelName" /></td>
    <td><code>string</code></td>
    <td>The name of the channel associated with this harvest job. (pattern: &lt;code&gt;&#91;a-zA-Z0-9_-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="CreatedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time when the harvest job was created.</td>
</tr>
<tr>
    <td><CopyableCode code="Description" /></td>
    <td><code>string</code></td>
    <td>An optional description of the harvest job.</td>
</tr>
<tr>
    <td><CopyableCode code="Destination" /></td>
    <td><code>object</code></td>
    <td>The configuration for the destination where the harvested content will be exported.</td>
</tr>
<tr>
    <td><CopyableCode code="ETag" /></td>
    <td><code>string</code></td>
    <td>The current version of the harvest job. Used for concurrency control. (pattern: &lt;code&gt;&#91;\S&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="ErrorMessage" /></td>
    <td><code>string</code></td>
    <td>An error message if the harvest job encountered any issues.</td>
</tr>
<tr>
    <td><CopyableCode code="HarvestJobName" /></td>
    <td><code>string</code></td>
    <td>The name of the harvest job. (pattern: &lt;code&gt;&#91;a-zA-Z0-9_-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="HarvestedManifests" /></td>
    <td><code>object</code></td>
    <td>A collection of harvested manifests of different types.</td>
</tr>
<tr>
    <td><CopyableCode code="ModifiedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time when the harvest job was last modified.</td>
</tr>
<tr>
    <td><CopyableCode code="OriginEndpointName" /></td>
    <td><code>string</code></td>
    <td>The name of the origin endpoint associated with this harvest job. (pattern: &lt;code&gt;&#91;a-zA-Z0-9_-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="ScheduleConfiguration" /></td>
    <td><code>object</code></td>
    <td>Defines the schedule configuration for a harvest job.</td>
</tr>
<tr>
    <td><CopyableCode code="Status" /></td>
    <td><code>string</code></td>
    <td>The current status of the harvest job (e.g., QUEUED, IN_PROGRESS, CANCELLED, COMPLETED, FAILED). (QUEUED, IN_PROGRESS, CANCELLED, COMPLETED, FAILED)</td>
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
    <td><a href="#get_harvest_job"><CopyableCode code="get_harvest_job" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-channel_group_name"><code>channel_group_name</code></a>, <a href="#parameter-channel_name"><code>channel_name</code></a>, <a href="#parameter-origin_endpoint_name"><code>origin_endpoint_name</code></a>, <a href="#parameter-harvest_job_name"><code>harvest_job_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves the details of a specific harvest job.</td>
</tr>
<tr>
    <td><a href="#list_harvest_jobs"><CopyableCode code="list_harvest_jobs" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-channel_group_name"><code>channel_group_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-channelName"><code>channelName</code></a>, <a href="#parameter-originEndpointName"><code>originEndpointName</code></a>, <a href="#parameter-includeStatus"><code>includeStatus</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Retrieves a list of harvest jobs that match the specified criteria.</td>
</tr>
<tr>
    <td><a href="#create_harvest_job"><CopyableCode code="create_harvest_job" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-channel_group_name"><code>channel_group_name</code></a>, <a href="#parameter-channel_name"><code>channel_name</code></a>, <a href="#parameter-origin_endpoint_name"><code>origin_endpoint_name</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-HarvestedManifests"><code>HarvestedManifests</code></a>, <a href="#parameter-ScheduleConfiguration"><code>ScheduleConfiguration</code></a></td>
    <td><a href="#parameter-x-amzn-client-token"><code>x-amzn-client-token</code></a></td>
    <td>Creates a new harvest job to export content from a MediaPackage v2 channel to an S3 bucket.</td>
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
<tr id="parameter-channel_group_name">
    <td><CopyableCode code="channel_group_name" /></td>
    <td><code>string</code></td>
    <td>The name of the channel group containing the channel from which to harvest content.</td>
</tr>
<tr id="parameter-channel_name">
    <td><CopyableCode code="channel_name" /></td>
    <td><code>string</code></td>
    <td>The name of the channel from which to harvest content.</td>
</tr>
<tr id="parameter-harvest_job_name">
    <td><CopyableCode code="harvest_job_name" /></td>
    <td><code>string</code></td>
    <td>The name of the harvest job to retrieve.</td>
</tr>
<tr id="parameter-origin_endpoint_name">
    <td><CopyableCode code="origin_endpoint_name" /></td>
    <td><code>string</code></td>
    <td>The name of the origin endpoint from which to harvest content.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-channelName">
    <td><CopyableCode code="channelName" /></td>
    <td><code>string</code></td>
    <td>The name of the channel to filter the harvest jobs by. If specified, only harvest jobs associated with this channel will be returned.</td>
</tr>
<tr id="parameter-includeStatus">
    <td><CopyableCode code="includeStatus" /></td>
    <td><code>string</code></td>
    <td>The status to filter the harvest jobs by. If specified, only harvest jobs with this status will be returned.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of harvest jobs to return in a single request. If not specified, a default value will be used.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>A token used for pagination. Provide this value in subsequent requests to retrieve the next set of results.</td>
</tr>
<tr id="parameter-originEndpointName">
    <td><CopyableCode code="originEndpointName" /></td>
    <td><code>string</code></td>
    <td>The name of the origin endpoint to filter the harvest jobs by. If specified, only harvest jobs associated with this origin endpoint will be returned.</td>
</tr>
<tr id="parameter-x-amzn-client-token">
    <td><CopyableCode code="x-amzn-client-token" /></td>
    <td><code>string</code></td>
    <td>A unique, case-sensitive identifier that you provide to ensure the idempotency of the request.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_harvest_job"
    values={[
        { label: 'get_harvest_job', value: 'get_harvest_job' },
        { label: 'list_harvest_jobs', value: 'list_harvest_jobs' }
    ]}
>
<TabItem value="get_harvest_job">

Retrieves the details of a specific harvest job.

```sql
SELECT
Arn,
ChannelGroupName,
ChannelName,
CreatedAt,
Description,
Destination,
ETag,
ErrorMessage,
HarvestJobName,
HarvestedManifests,
ModifiedAt,
OriginEndpointName,
ScheduleConfiguration,
Status,
Tags
FROM aws.mediapackagev2.harvest_jobs
WHERE channel_group_name = '{{ channel_group_name }}' -- required
AND channel_name = '{{ channel_name }}' -- required
AND origin_endpoint_name = '{{ origin_endpoint_name }}' -- required
AND harvest_job_name = '{{ harvest_job_name }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_harvest_jobs">

Retrieves a list of harvest jobs that match the specified criteria.

```sql
SELECT
Arn,
ChannelGroupName,
ChannelName,
CreatedAt,
Description,
Destination,
ETag,
ErrorMessage,
HarvestJobName,
HarvestedManifests,
ModifiedAt,
OriginEndpointName,
ScheduleConfiguration,
Status
FROM aws.mediapackagev2.harvest_jobs
WHERE channel_group_name = '{{ channel_group_name }}' -- required
AND region = '{{ region }}' -- required
AND channelName = '{{ channelName }}'
AND originEndpointName = '{{ originEndpointName }}'
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

Creates a new harvest job to export content from a MediaPackage v2 channel to an S3 bucket.

```sql
INSERT INTO aws.mediapackagev2.harvest_jobs (
Description,
HarvestedManifests,
ScheduleConfiguration,
Destination,
HarvestJobName,
Tags,
channel_group_name,
channel_name,
origin_endpoint_name,
region,
`x-amzn-client-token`
)
SELECT 
'{{ Description }}',
'{{ HarvestedManifests }}' /* required */,
'{{ ScheduleConfiguration }}' /* required */,
'{{ Destination }}',
'{{ HarvestJobName }}',
'{{ Tags }}',
'{{ channel_group_name }}',
'{{ channel_name }}',
'{{ origin_endpoint_name }}',
'{{ region }}',
'{{ x-amzn-client-token }}'
RETURNING
Arn,
ChannelGroupName,
ChannelName,
CreatedAt,
Description,
Destination,
ETag,
ErrorMessage,
HarvestJobName,
HarvestedManifests,
ModifiedAt,
OriginEndpointName,
ScheduleConfiguration,
Status,
Tags
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: harvest_jobs
  props:
    - name: channel_group_name
      value: "{{ channel_group_name }}"
      description: Required parameter for the harvest_jobs resource.
    - name: channel_name
      value: "{{ channel_name }}"
      description: Required parameter for the harvest_jobs resource.
    - name: origin_endpoint_name
      value: "{{ origin_endpoint_name }}"
      description: Required parameter for the harvest_jobs resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the harvest_jobs resource.
    - name: Description
      value: "{{ Description }}"
    - name: HarvestedManifests
      description: |
        A collection of harvested manifests of different types.
      value:
        HlsManifests:
          - ManifestName: "{{ ManifestName }}"
        DashManifests:
          - ManifestName: "{{ ManifestName }}"
        LowLatencyHlsManifests:
          - ManifestName: "{{ ManifestName }}"
    - name: ScheduleConfiguration
      description: |
        Defines the schedule configuration for a harvest job.
      value:
        StartTime: "{{ StartTime }}"
        EndTime: "{{ EndTime }}"
    - name: Destination
      description: |
        The configuration for the destination where the harvested content will be exported.
      value:
        S3Destination:
          BucketName: "{{ BucketName }}"
          DestinationPath: "{{ DestinationPath }}"
    - name: HarvestJobName
      value: "{{ HarvestJobName }}"
    - name: Tags
      value: "{{ Tags }}"
    - name: x-amzn-client-token
      value: "{{ x-amzn-client-token }}"
      description: A unique, case-sensitive identifier that you provide to ensure the idempotency of the request.
      description: A unique, case-sensitive identifier that you provide to ensure the idempotency of the request.
`}</CodeBlock>

</TabItem>
</Tabs>
