--- 
title: resource_snapshots
hide_title: false
hide_table_of_contents: false
keywords:
  - resource_snapshots
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

Creates, updates, deletes, gets or lists a <code>resource_snapshots</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="resource_snapshots" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.partnercentral_selling.resource_snapshots" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_resource_snapshot"
    values={[
        { label: 'get_resource_snapshot', value: 'get_resource_snapshot' },
        { label: 'list_resource_snapshots', value: 'list_resource_snapshots' }
    ]}
>
<TabItem value="get_resource_snapshot">

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
    <td>The Amazon Resource Name (ARN) that uniquely identifies the resource snapshot. (pattern: &lt;code&gt;arn:.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="catalog" /></td>
    <td><code>string</code></td>
    <td>The catalog in which the snapshot was created. Matches the Catalog specified in the request. (pattern: &lt;code&gt;&#91;a-zA-Z&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the snapshot was created, in ISO 8601 format (e.g., "2023-06-01T14:30:00Z"). This allows for precise tracking of when the snapshot was taken.</td>
</tr>
<tr>
    <td><CopyableCode code="created_by" /></td>
    <td><code>string</code></td>
    <td>The AWS account ID of the principal (user or role) who created the snapshot. This helps in tracking the origin of the snapshot. (pattern: &lt;code&gt;(&#91;0-9&#93;&#123;12&#125;|\w&#123;1,12&#125;)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="engagement_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the engagement associated with this snapshot. Matches the EngagementIdentifier specified in the request. (pattern: &lt;code&gt;eng-&#91;0-9a-z&#93;&#123;14&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="payload" /></td>
    <td><code>object</code></td>
    <td>Represents the payload of a resource snapshot. This structure is designed to accommodate different types of resource snapshots, currently supporting opportunity summaries.</td>
</tr>
<tr>
    <td><CopyableCode code="resource_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the specific resource that was snapshotted. Matches the ResourceIdentifier specified in the request. (pattern: &lt;code&gt;O&#91;0-9&#93;&#123;1,19&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="resource_snapshot_template_name" /></td>
    <td><code>string</code></td>
    <td>The name of the view used for this snapshot. This is the same as the template name. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;&#123;3,80&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="resource_type" /></td>
    <td><code>string</code></td>
    <td>The type of the resource that was snapshotted. Matches the ResourceType specified in the request. (Opportunity)</td>
</tr>
<tr>
    <td><CopyableCode code="revision" /></td>
    <td><code>integer</code></td>
    <td>The revision number of this snapshot. This is a positive integer that is sequential and unique within the context of a resource view.</td>
</tr>
<tr>
    <td><CopyableCode code="target_member_accounts" /></td>
    <td><code>array</code></td>
    <td>Target member accounts associated with the resource snapshot.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_resource_snapshots">

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
    <td>The Amazon Resource Name (ARN) of the snapshot. This globally unique identifier can be used for cross-service references and in IAM policies. (pattern: &lt;code&gt;arn:.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="created_by" /></td>
    <td><code>string</code></td>
    <td>The AWS account ID of the entity that owns the resource from which the snapshot was created. (pattern: &lt;code&gt;(&#91;0-9&#93;&#123;12&#125;|\w&#123;1,12&#125;)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="resource_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the specific resource snapshotted. The format might vary depending on the ResourceType. (pattern: &lt;code&gt;O&#91;0-9&#93;&#123;1,19&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="resource_snapshot_template_name" /></td>
    <td><code>string</code></td>
    <td>The name of the template used to create the snapshot. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;&#123;3,80&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="resource_type" /></td>
    <td><code>string</code></td>
    <td>The type of resource snapshotted. (Opportunity)</td>
</tr>
<tr>
    <td><CopyableCode code="revision" /></td>
    <td><code>integer</code></td>
    <td>The revision number of the snapshot. This integer value is incremented each time the snapshot is updated, allowing for version tracking of the resource snapshot.</td>
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
    <td><a href="#get_resource_snapshot"><CopyableCode code="get_resource_snapshot" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Use this action to retrieve a specific snapshot record.</td>
</tr>
<tr>
    <td><a href="#list_resource_snapshots"><CopyableCode code="list_resource_snapshots" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves a list of resource view snapshots based on specified criteria. This operation supports various use cases, including: Fetching all snapshots associated with an engagement. Retrieving snapshots of a specific resource type within an engagement. Obtaining snapshots for a particular resource using a specified template. Accessing the latest snapshot of a resource within an engagement. Filtering snapshots by resource owner.</td>
</tr>
<tr>
    <td><a href="#create_resource_snapshot"><CopyableCode code="create_resource_snapshot" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-EngagementIdentifier"><code>EngagementIdentifier</code></a>, <a href="#parameter-ResourceType"><code>ResourceType</code></a>, <a href="#parameter-ResourceIdentifier"><code>ResourceIdentifier</code></a>, <a href="#parameter-ResourceSnapshotTemplateIdentifier"><code>ResourceSnapshotTemplateIdentifier</code></a>, <a href="#parameter-ClientToken"><code>ClientToken</code></a></td>
    <td></td>
    <td>This action allows you to create an immutable snapshot of a specific resource, such as an opportunity, within the context of an engagement. The snapshot captures a subset of the resource's data based on the schema defined by the provided template.</td>
</tr>
<tr>
    <td><a href="#start_resource_snapshot_job"><CopyableCode code="start_resource_snapshot_job" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ResourceSnapshotJobIdentifier"><code>ResourceSnapshotJobIdentifier</code></a></td>
    <td></td>
    <td>Starts a resource snapshot job that has been previously created.</td>
</tr>
<tr>
    <td><a href="#stop_resource_snapshot_job"><CopyableCode code="stop_resource_snapshot_job" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ResourceSnapshotJobIdentifier"><code>ResourceSnapshotJobIdentifier</code></a></td>
    <td></td>
    <td>Stops a resource snapshot job. The job must be started prior to being stopped.</td>
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
    defaultValue="get_resource_snapshot"
    values={[
        { label: 'get_resource_snapshot', value: 'get_resource_snapshot' },
        { label: 'list_resource_snapshots', value: 'list_resource_snapshots' }
    ]}
>
<TabItem value="get_resource_snapshot">

Use this action to retrieve a specific snapshot record.

```sql
SELECT
arn,
catalog,
created_at,
created_by,
engagement_id,
payload,
resource_id,
resource_snapshot_template_name,
resource_type,
revision,
target_member_accounts
FROM aws.partnercentral_selling.resource_snapshots
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_resource_snapshots">

Retrieves a list of resource view snapshots based on specified criteria. This operation supports various use cases, including: Fetching all snapshots associated with an engagement. Retrieving snapshots of a specific resource type within an engagement. Obtaining snapshots for a particular resource using a specified template. Accessing the latest snapshot of a resource within an engagement. Filtering snapshots by resource owner.

```sql
SELECT
arn,
created_by,
resource_id,
resource_snapshot_template_name,
resource_type,
revision
FROM aws.partnercentral_selling.resource_snapshots
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_resource_snapshot"
    values={[
        { label: 'create_resource_snapshot', value: 'create_resource_snapshot' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_resource_snapshot">

This action allows you to create an immutable snapshot of a specific resource, such as an opportunity, within the context of an engagement. The snapshot captures a subset of the resource's data based on the schema defined by the provided template.

```sql
INSERT INTO aws.partnercentral_selling.resource_snapshots (
Catalog,
EngagementIdentifier,
ResourceType,
ResourceIdentifier,
ResourceSnapshotTemplateIdentifier,
ClientToken,
region
)
SELECT 
'{{ Catalog }}',
'{{ EngagementIdentifier }}' /* required */,
'{{ ResourceType }}' /* required */,
'{{ ResourceIdentifier }}' /* required */,
'{{ ResourceSnapshotTemplateIdentifier }}' /* required */,
'{{ ClientToken }}' /* required */,
'{{ region }}'
RETURNING
arn,
revision
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: resource_snapshots
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the resource_snapshots resource.
    - name: Catalog
      value: "{{ Catalog }}"
      description: |
        Specifies the catalog where the snapshot is created. Valid values are AWS and Sandbox.
    - name: EngagementIdentifier
      value: "{{ EngagementIdentifier }}"
      description: |
        The unique identifier of the engagement associated with this snapshot. This field links the snapshot to a specific engagement context.
    - name: ResourceType
      value: "{{ ResourceType }}"
      description: |
        Specifies the type of resource for which the snapshot is being created. This field determines the structure and content of the snapshot. Must be one of the supported resource types, such as: Opportunity.
      valid_values: ['Opportunity']
    - name: ResourceIdentifier
      value: "{{ ResourceIdentifier }}"
      description: |
        The unique identifier of the specific resource to be snapshotted. The format and constraints of this identifier depend on the ResourceType specified. For example: For Opportunity type, it will be an opportunity ID.
    - name: ResourceSnapshotTemplateIdentifier
      value: "{{ ResourceSnapshotTemplateIdentifier }}"
      description: |
        The name of the template that defines the schema for the snapshot. This template determines which subset of the resource data will be included in the snapshot. Must correspond to an existing and valid template for the specified ResourceType.
    - name: ClientToken
      value: "{{ ClientToken }}"
      description: |
        Specifies a unique, client-generated UUID to ensure that the request is handled exactly once. This token helps prevent duplicate snapshot creations.
`}</CodeBlock>

</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="start_resource_snapshot_job"
    values={[
        { label: 'start_resource_snapshot_job', value: 'start_resource_snapshot_job' },
        { label: 'stop_resource_snapshot_job', value: 'stop_resource_snapshot_job' }
    ]}
>
<TabItem value="start_resource_snapshot_job">

Starts a resource snapshot job that has been previously created.

```sql
EXEC aws.partnercentral_selling.resource_snapshots.start_resource_snapshot_job 
@region='{{ region }}' --required 
@@json=
'{
"Catalog": "{{ Catalog }}", 
"ResourceSnapshotJobIdentifier": "{{ ResourceSnapshotJobIdentifier }}"
}'
;
```
</TabItem>
<TabItem value="stop_resource_snapshot_job">

Stops a resource snapshot job. The job must be started prior to being stopped.

```sql
EXEC aws.partnercentral_selling.resource_snapshots.stop_resource_snapshot_job 
@region='{{ region }}' --required 
@@json=
'{
"Catalog": "{{ Catalog }}", 
"ResourceSnapshotJobIdentifier": "{{ ResourceSnapshotJobIdentifier }}"
}'
;
```
</TabItem>
</Tabs>
