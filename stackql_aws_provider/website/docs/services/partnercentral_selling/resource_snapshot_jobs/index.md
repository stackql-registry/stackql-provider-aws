--- 
title: resource_snapshot_jobs
hide_title: false
hide_table_of_contents: false
keywords:
  - resource_snapshot_jobs
  - partnercentral_selling
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

Creates, updates, deletes, gets or lists a <code>resource_snapshot_jobs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="resource_snapshot_jobs" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.partnercentral_selling.resource_snapshot_jobs" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_resource_snapshot_job"
    values={[
        { label: 'get_resource_snapshot_job', value: 'get_resource_snapshot_job' },
        { label: 'list_resource_snapshot_jobs', value: 'list_resource_snapshot_jobs' }
    ]}
>
<TabItem value="get_resource_snapshot_job">

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
    <td>The Amazon Resource Name (ARN) of the snapshot job. This globally unique identifier can be used for resource-specific operations across AWS services. (pattern: &lt;code&gt;arn:.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="catalog" /></td>
    <td><code>string</code></td>
    <td>The catalog in which the snapshot job was created. This will match the Catalog specified in the request. (pattern: &lt;code&gt;&#91;a-zA-Z&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time when the snapshot job was created in ISO 8601 format (UTC). Example: "2023-05-01T20:37:46Z"</td>
</tr>
<tr>
    <td><CopyableCode code="engagement_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the engagement associated with this snapshot job. This links the job to a specific engagement context. (pattern: &lt;code&gt;eng-&#91;0-9a-z&#93;&#123;14&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the snapshot job. This matches the ResourceSnapshotJobIdentifier provided in the request. (pattern: &lt;code&gt;job-&#91;0-9a-z&#93;&#123;13&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="last_failure" /></td>
    <td><code>string</code></td>
    <td>If the job has encountered any failures, this field contains the error message from the most recent failure. This can be useful for troubleshooting issues with the job.</td>
</tr>
<tr>
    <td><CopyableCode code="last_successful_execution_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time of the last successful execution of the job, in ISO 8601 format (UTC). Example: "2023-05-01T20:37:46Z"</td>
</tr>
<tr>
    <td><CopyableCode code="resource_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the resource being snapshotted. This provides a globally unique identifier for the resource across AWS. (pattern: &lt;code&gt;arn:.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="resource_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the specific resource being snapshotted. The format might vary depending on the ResourceType. (pattern: &lt;code&gt;O&#91;0-9&#93;&#123;1,19&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="resource_snapshot_template_name" /></td>
    <td><code>string</code></td>
    <td>The name of the template used for creating the snapshot. This is the same as the template name. It defines the structure and content of the snapshot. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;&#123;3,80&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="resource_type" /></td>
    <td><code>string</code></td>
    <td>The type of resource being snapshotted. This would have "Opportunity" as a value as it is dependent on the supported resource type. (Opportunity)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current status of the snapshot job. Valid values: STOPPED: The job is not currently running. RUNNING: The job is actively executing. (Running, Stopped)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_resource_snapshot_jobs">

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
    <td>The Amazon Resource Name (ARN) for the resource snapshot job. (pattern: &lt;code&gt;arn:.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="engagement_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the Engagement. (pattern: &lt;code&gt;eng-&#91;0-9a-z&#93;&#123;14&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for the resource snapshot job within the AWS Partner Central system. This ID is used for direct references to the job within the service. (pattern: &lt;code&gt;job-&#91;0-9a-z&#93;&#123;13&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current status of the snapshot job. Valid values: STOPPED: The job is not currently running. RUNNING: The job is actively executing. (Running, Stopped)</td>
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
    <td><a href="#get_resource_snapshot_job"><CopyableCode code="get_resource_snapshot_job" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Use this action to retrieves information about a specific resource snapshot job.</td>
</tr>
<tr>
    <td><a href="#list_resource_snapshot_jobs"><CopyableCode code="list_resource_snapshot_jobs" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists resource snapshot jobs owned by the customer. This operation supports various filtering scenarios, including listing all jobs owned by the caller, jobs for a specific engagement, jobs with a specific status, or any combination of these filters.</td>
</tr>
<tr>
    <td><a href="#create_resource_snapshot_job"><CopyableCode code="create_resource_snapshot_job" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ClientToken"><code>ClientToken</code></a>, <a href="#parameter-EngagementIdentifier"><code>EngagementIdentifier</code></a>, <a href="#parameter-ResourceType"><code>ResourceType</code></a>, <a href="#parameter-ResourceIdentifier"><code>ResourceIdentifier</code></a>, <a href="#parameter-ResourceSnapshotTemplateIdentifier"><code>ResourceSnapshotTemplateIdentifier</code></a></td>
    <td></td>
    <td>Use this action to create a job to generate a snapshot of the specified resource within an engagement. It initiates an asynchronous process to create a resource snapshot. The job creates a new snapshot only if the resource state has changed, adhering to the same access control and immutability rules as direct snapshot creation.</td>
</tr>
<tr>
    <td><a href="#delete_resource_snapshot_job"><CopyableCode code="delete_resource_snapshot_job" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Use this action to deletes a previously created resource snapshot job. The job must be in a stopped state before it can be deleted.</td>
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
    defaultValue="get_resource_snapshot_job"
    values={[
        { label: 'get_resource_snapshot_job', value: 'get_resource_snapshot_job' },
        { label: 'list_resource_snapshot_jobs', value: 'list_resource_snapshot_jobs' }
    ]}
>
<TabItem value="get_resource_snapshot_job">

Use this action to retrieves information about a specific resource snapshot job.

```sql
SELECT
arn,
catalog,
created_at,
engagement_id,
id,
last_failure,
last_successful_execution_date,
resource_arn,
resource_id,
resource_snapshot_template_name,
resource_type,
status
FROM aws.partnercentral_selling.resource_snapshot_jobs
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_resource_snapshot_jobs">

Lists resource snapshot jobs owned by the customer. This operation supports various filtering scenarios, including listing all jobs owned by the caller, jobs for a specific engagement, jobs with a specific status, or any combination of these filters.

```sql
SELECT
arn,
engagement_id,
id,
status
FROM aws.partnercentral_selling.resource_snapshot_jobs
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_resource_snapshot_job"
    values={[
        { label: 'create_resource_snapshot_job', value: 'create_resource_snapshot_job' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_resource_snapshot_job">

Use this action to create a job to generate a snapshot of the specified resource within an engagement. It initiates an asynchronous process to create a resource snapshot. The job creates a new snapshot only if the resource state has changed, adhering to the same access control and immutability rules as direct snapshot creation.

```sql
INSERT INTO aws.partnercentral_selling.resource_snapshot_jobs (
Catalog,
ClientToken,
EngagementIdentifier,
ResourceType,
ResourceIdentifier,
ResourceSnapshotTemplateIdentifier,
Tags,
region
)
SELECT 
'{{ Catalog }}',
'{{ ClientToken }}' /* required */,
'{{ EngagementIdentifier }}' /* required */,
'{{ ResourceType }}' /* required */,
'{{ ResourceIdentifier }}' /* required */,
'{{ ResourceSnapshotTemplateIdentifier }}' /* required */,
'{{ Tags }}',
'{{ region }}'
RETURNING
arn,
id
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: resource_snapshot_jobs
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the resource_snapshot_jobs resource.
    - name: Catalog
      value: "{{ Catalog }}"
      description: |
        Specifies the catalog in which to create the snapshot job. Valid values are AWS and Sandbox.
    - name: ClientToken
      value: "{{ ClientToken }}"
      description: |
        A client-generated UUID used for idempotency check. The token helps prevent duplicate job creations.
    - name: EngagementIdentifier
      value: "{{ EngagementIdentifier }}"
      description: |
        Specifies the identifier of the engagement associated with the resource to be snapshotted.
    - name: ResourceType
      value: "{{ ResourceType }}"
      description: |
        The type of resource for which the snapshot job is being created. Must be one of the supported resource types i.e. Opportunity
      valid_values: ['Opportunity']
    - name: ResourceIdentifier
      value: "{{ ResourceIdentifier }}"
      description: |
        Specifies the identifier of the specific resource to be snapshotted. The format depends on the ResourceType.
    - name: ResourceSnapshotTemplateIdentifier
      value: "{{ ResourceSnapshotTemplateIdentifier }}"
      description: |
        Specifies the name of the template that defines the schema for the snapshot.
    - name: Tags
      description: |
        A map of the key-value pairs of the tag or tags to assign.
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_resource_snapshot_job"
    values={[
        { label: 'delete_resource_snapshot_job', value: 'delete_resource_snapshot_job' }
    ]}
>
<TabItem value="delete_resource_snapshot_job">

Use this action to deletes a previously created resource snapshot job. The job must be in a stopped state before it can be deleted.

```sql
DELETE FROM aws.partnercentral_selling.resource_snapshot_jobs
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
