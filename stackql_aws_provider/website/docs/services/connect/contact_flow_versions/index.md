--- 
title: contact_flow_versions
hide_title: false
hide_table_of_contents: false
keywords:
  - contact_flow_versions
  - connect
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

Creates, updates, deletes, gets or lists a <code>contact_flow_versions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="contact_flow_versions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.connect.contact_flow_versions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_contact_flow_versions"
    values={[
        { label: 'list_contact_flow_versions', value: 'list_contact_flow_versions' }
    ]}
>
<TabItem value="list_contact_flow_versions">

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
    <td>The Amazon Resource Name (ARN) of the view version.</td>
</tr>
<tr>
    <td><CopyableCode code="Version" /></td>
    <td><code>integer (int64)</code></td>
    <td>The identifier of the flow version.</td>
</tr>
<tr>
    <td><CopyableCode code="VersionDescription" /></td>
    <td><code>string</code></td>
    <td>The description of the flow version.</td>
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
    <td><a href="#list_contact_flow_versions"><CopyableCode code="list_contact_flow_versions" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-instance_id"><code>instance_id</code></a>, <a href="#parameter-contact_flow_id"><code>contact_flow_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a></td>
    <td>Returns all the available versions for the specified Amazon Connect instance and flow identifier.</td>
</tr>
<tr>
    <td><a href="#create_contact_flow_version"><CopyableCode code="create_contact_flow_version" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-instance_id"><code>instance_id</code></a>, <a href="#parameter-contact_flow_id"><code>contact_flow_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Publishes a new version of the flow provided. Versions are immutable and monotonically increasing. If the FlowContentSha256 provided is different from the FlowContentSha256 of the $LATEST published flow content, then an error is returned. This API only supports creating versions for flows of type Campaign.</td>
</tr>
<tr>
    <td><a href="#delete_contact_flow_version"><CopyableCode code="delete_contact_flow_version" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-instance_id"><code>instance_id</code></a>, <a href="#parameter-contact_flow_id"><code>contact_flow_id</code></a>, <a href="#parameter-contact_flow_version"><code>contact_flow_version</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the particular version specified in flow version identifier.</td>
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
<tr id="parameter-contact_flow_id">
    <td><CopyableCode code="contact_flow_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the flow.</td>
</tr>
<tr id="parameter-contact_flow_version">
    <td><CopyableCode code="contact_flow_version" /></td>
    <td><code>integer (int64)</code></td>
    <td>The identifier of the flow version.</td>
</tr>
<tr id="parameter-instance_id">
    <td><CopyableCode code="instance_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the Amazon Connect instance. You can find the instance ID in the Amazon Resource Name (ARN) of the instance.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return per page. The default MaxResult size is 100.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_contact_flow_versions"
    values={[
        { label: 'list_contact_flow_versions', value: 'list_contact_flow_versions' }
    ]}
>
<TabItem value="list_contact_flow_versions">

Returns all the available versions for the specified Amazon Connect instance and flow identifier.

```sql
SELECT
Arn,
Version,
VersionDescription
FROM aws.connect.contact_flow_versions
WHERE instance_id = '{{ instance_id }}' -- required
AND contact_flow_id = '{{ contact_flow_id }}' -- required
AND region = '{{ region }}' -- required
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_contact_flow_version"
    values={[
        { label: 'create_contact_flow_version', value: 'create_contact_flow_version' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_contact_flow_version">

Publishes a new version of the flow provided. Versions are immutable and monotonically increasing. If the FlowContentSha256 provided is different from the FlowContentSha256 of the $LATEST published flow content, then an error is returned. This API only supports creating versions for flows of type Campaign.

```sql
INSERT INTO aws.connect.contact_flow_versions (
Description,
FlowContentSha256,
ContactFlowVersion,
LastModifiedTime,
LastModifiedRegion,
instance_id,
contact_flow_id,
region
)
SELECT 
'{{ Description }}',
'{{ FlowContentSha256 }}',
{{ ContactFlowVersion }},
'{{ LastModifiedTime }}',
'{{ LastModifiedRegion }}',
'{{ instance_id }}',
'{{ contact_flow_id }}',
'{{ region }}'
RETURNING
ContactFlowArn,
Version
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: contact_flow_versions
  props:
    - name: instance_id
      value: "{{ instance_id }}"
      description: Required parameter for the contact_flow_versions resource.
    - name: contact_flow_id
      value: "{{ contact_flow_id }}"
      description: Required parameter for the contact_flow_versions resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the contact_flow_versions resource.
    - name: Description
      value: "{{ Description }}"
    - name: FlowContentSha256
      value: "{{ FlowContentSha256 }}"
    - name: ContactFlowVersion
      value: {{ ContactFlowVersion }}
    - name: LastModifiedTime
      value: "{{ LastModifiedTime }}"
    - name: LastModifiedRegion
      value: "{{ LastModifiedRegion }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_contact_flow_version"
    values={[
        { label: 'delete_contact_flow_version', value: 'delete_contact_flow_version' }
    ]}
>
<TabItem value="delete_contact_flow_version">

Deletes the particular version specified in flow version identifier.

```sql
DELETE FROM aws.connect.contact_flow_versions
WHERE instance_id = '{{ instance_id }}' --required
AND contact_flow_id = '{{ contact_flow_id }}' --required
AND contact_flow_version = '{{ contact_flow_version }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
