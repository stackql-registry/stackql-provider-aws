--- 
title: metadata_transfer_jobs
hide_title: false
hide_table_of_contents: false
keywords:
  - metadata_transfer_jobs
  - iottwinmaker
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

Creates, updates, deletes, gets or lists a <code>metadata_transfer_jobs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="metadata_transfer_jobs" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.iottwinmaker.metadata_transfer_jobs" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_metadata_transfer_jobs"
    values={[
        { label: 'list_metadata_transfer_jobs', value: 'list_metadata_transfer_jobs' },
        { label: 'get_metadata_transfer_job', value: 'get_metadata_transfer_job' }
    ]}
>
<TabItem value="list_metadata_transfer_jobs">

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
    <td><CopyableCode code="metadataTransferJobSummaries" /></td>
    <td><code>array</code></td>
    <td>The metadata transfer job summaries.</td>
</tr>
<tr>
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The string that specifies the next page of results. (pattern: &lt;code&gt;.*&lt;/code&gt;)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="get_metadata_transfer_job">

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
    <td>The metadata transfer job ARN. (pattern: &lt;code&gt;arn:((aws)|(aws-cn)|(aws-us-gov)):iottwinmaker:&#91;a-z0-9-&#93;+:&#91;0-9&#93;&#123;12&#125;:&#91;\/a-zA-Z0-9_\-\.:&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="creationDateTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The metadata transfer job's creation DateTime property.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The metadata transfer job description. (pattern: &lt;code&gt;.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="destination" /></td>
    <td><code>object</code></td>
    <td>The &#91;link to action&#93; metadata transfer job destination configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="metadataTransferJobId" /></td>
    <td><code>string</code></td>
    <td>The metadata transfer job Id. (pattern: &lt;code&gt;&#91;a-zA-Z_0-9&#93;&#91;a-zA-Z_\-0-9&#93;*&#91;a-zA-Z0-9&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="metadataTransferJobRole" /></td>
    <td><code>string</code></td>
    <td>The metadata transfer job's role. (pattern: &lt;code&gt;arn:((aws)|(aws-cn)|(aws-us-gov)):iam::&#91;0-9&#93;&#123;12&#125;:role/.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="progress" /></td>
    <td><code>object</code></td>
    <td>The metadata transfer job's progress.</td>
</tr>
<tr>
    <td><CopyableCode code="reportUrl" /></td>
    <td><code>string</code></td>
    <td>The metadata transfer job's report URL. (pattern: &lt;code&gt;.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="sources" /></td>
    <td><code>array</code></td>
    <td>The metadata transfer job's sources.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>object</code></td>
    <td>The metadata transfer job's status.</td>
</tr>
<tr>
    <td><CopyableCode code="updateDateTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The metadata transfer job's update DateTime property.</td>
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
    <td><a href="#list_metadata_transfer_jobs"><CopyableCode code="list_metadata_transfer_jobs" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists the metadata transfer jobs.</td>
</tr>
<tr>
    <td><a href="#get_metadata_transfer_job"><CopyableCode code="get_metadata_transfer_job" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-metadata_transfer_job_id"><code>metadata_transfer_job_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets a nmetadata transfer job.</td>
</tr>
<tr>
    <td><a href="#create_metadata_transfer_job"><CopyableCode code="create_metadata_transfer_job" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-sources"><code>sources</code></a>, <a href="#parameter-destination"><code>destination</code></a></td>
    <td></td>
    <td>Creates a new metadata transfer job.</td>
</tr>
<tr>
    <td><a href="#cancel_metadata_transfer_job"><CopyableCode code="cancel_metadata_transfer_job" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-metadata_transfer_job_id"><code>metadata_transfer_job_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Cancels the metadata transfer job.</td>
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
<tr id="parameter-metadata_transfer_job_id">
    <td><CopyableCode code="metadata_transfer_job_id" /></td>
    <td><code>string</code></td>
    <td>The metadata transfer job Id.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_metadata_transfer_jobs"
    values={[
        { label: 'list_metadata_transfer_jobs', value: 'list_metadata_transfer_jobs' },
        { label: 'get_metadata_transfer_job', value: 'get_metadata_transfer_job' }
    ]}
>
<TabItem value="list_metadata_transfer_jobs">

Lists the metadata transfer jobs.

```sql
SELECT
metadataTransferJobSummaries,
nextToken
FROM aws.iottwinmaker.metadata_transfer_jobs
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="get_metadata_transfer_job">

Gets a nmetadata transfer job.

```sql
SELECT
arn,
creationDateTime,
description,
destination,
metadataTransferJobId,
metadataTransferJobRole,
progress,
reportUrl,
sources,
status,
updateDateTime
FROM aws.iottwinmaker.metadata_transfer_jobs
WHERE metadata_transfer_job_id = '{{ metadata_transfer_job_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_metadata_transfer_job"
    values={[
        { label: 'create_metadata_transfer_job', value: 'create_metadata_transfer_job' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_metadata_transfer_job">

Creates a new metadata transfer job.

```sql
INSERT INTO aws.iottwinmaker.metadata_transfer_jobs (
metadataTransferJobId,
description,
sources,
destination,
region
)
SELECT 
'{{ metadataTransferJobId }}',
'{{ description }}',
'{{ sources }}' /* required */,
'{{ destination }}' /* required */,
'{{ region }}'
RETURNING
arn,
creationDateTime,
metadataTransferJobId,
status
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: metadata_transfer_jobs
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the metadata_transfer_jobs resource.
    - name: metadataTransferJobId
      value: "{{ metadataTransferJobId }}"
    - name: description
      value: "{{ description }}"
    - name: sources
      value:
        - type_: "{{ type_ }}"
          s3Configuration:
            location: "{{ location }}"
          iotSiteWiseConfiguration:
            filters:
              - filterByAssetModel:
                  assetModelId: "{{ assetModelId }}"
                  assetModelExternalId: "{{ assetModelExternalId }}"
                  includeOffspring: {{ includeOffspring }}
                  includeAssets: {{ includeAssets }}
                filterByAsset:
                  assetId: "{{ assetId }}"
                  assetExternalId: "{{ assetExternalId }}"
                  includeOffspring: {{ includeOffspring }}
                  includeAssetModel: {{ includeAssetModel }}
          iotTwinMakerConfiguration:
            workspace: "{{ workspace }}"
            filters:
              - filterByComponentType:
                  componentTypeId: "{{ componentTypeId }}"
                filterByEntity:
                  entityId: "{{ entityId }}"
    - name: destination
      description: |
        The [link to action] metadata transfer job destination configuration.
      value:
        type_: "{{ type_ }}"
        s3Configuration:
          location: "{{ location }}"
        iotTwinMakerConfiguration:
          workspace: "{{ workspace }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="cancel_metadata_transfer_job"
    values={[
        { label: 'cancel_metadata_transfer_job', value: 'cancel_metadata_transfer_job' }
    ]}
>
<TabItem value="cancel_metadata_transfer_job">

Cancels the metadata transfer job.

```sql
EXEC aws.iottwinmaker.metadata_transfer_jobs.cancel_metadata_transfer_job 
@metadata_transfer_job_id='{{ metadata_transfer_job_id }}' --required, 
@region='{{ region }}' --required
;
```
</TabItem>
</Tabs>
