--- 
title: application_instances
hide_title: false
hide_table_of_contents: false
keywords:
  - application_instances
  - panorama
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

Creates, updates, deletes, gets or lists an <code>application_instances</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="application_instances" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.panorama.application_instances" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_application_instance"
    values={[
        { label: 'describe_application_instance', value: 'describe_application_instance' },
        { label: 'list_application_instances', value: 'list_application_instances' }
    ]}
>
<TabItem value="describe_application_instance">

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
    <td><CopyableCode code="application_instance_id" /></td>
    <td><code>string</code></td>
    <td>The application instance's ID. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9\-\_&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="application_instance_id_to_replace" /></td>
    <td><code>string</code></td>
    <td>The ID of the application instance that this instance replaced. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9\-\_&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The application instance's ARN.</td>
</tr>
<tr>
    <td><CopyableCode code="created_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>When the application instance was created.</td>
</tr>
<tr>
    <td><CopyableCode code="default_runtime_context_device" /></td>
    <td><code>string</code></td>
    <td>The device's ID. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9\-\_&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="default_runtime_context_device_name" /></td>
    <td><code>string</code></td>
    <td>The device's bane. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9\-\_&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The application instance's description. (pattern: &lt;code&gt;^.*$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="health_status" /></td>
    <td><code>string</code></td>
    <td>The application instance's health status. (RUNNING, ERROR, NOT_AVAILABLE)</td>
</tr>
<tr>
    <td><CopyableCode code="last_updated_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The application instance was updated.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The application instance's name. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9\-\_&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="runtime_context_states" /></td>
    <td><code>array</code></td>
    <td>The application instance's state.</td>
</tr>
<tr>
    <td><CopyableCode code="runtime_role_arn" /></td>
    <td><code>string</code></td>
    <td>The application instance's runtime role ARN. (pattern: &lt;code&gt;^arn:&#91;a-z0-9&#93;&#91;-.a-z0-9&#93;&#123;0,62&#125;:iam::&#91;0-9&#93;&#123;12&#125;:role/.+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The application instance's status. (DEPLOYMENT_PENDING, DEPLOYMENT_REQUESTED, DEPLOYMENT_IN_PROGRESS, DEPLOYMENT_ERROR, DEPLOYMENT_SUCCEEDED, REMOVAL_PENDING, REMOVAL_REQUESTED, REMOVAL_IN_PROGRESS, REMOVAL_FAILED, REMOVAL_SUCCEEDED, DEPLOYMENT_FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="status_description" /></td>
    <td><code>string</code></td>
    <td>The application instance's status description.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>The application instance's tags.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_application_instances">

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
    <td><CopyableCode code="application_instances" /></td>
    <td><code>array</code></td>
    <td>A list of application instances.</td>
</tr>
<tr>
    <td><CopyableCode code="next_token" /></td>
    <td><code>string</code></td>
    <td>A pagination token that's included if more results are available. (pattern: &lt;code&gt;^.+$&lt;/code&gt;)</td>
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
    <td><a href="#describe_application_instance"><CopyableCode code="describe_application_instance" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-application_instance_id"><code>application_instance_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns information about an application instance on a device.</td>
</tr>
<tr>
    <td><a href="#list_application_instances"><CopyableCode code="list_application_instances" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-deviceId"><code>deviceId</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-statusFilter"><code>statusFilter</code></a></td>
    <td>Returns a list of application instances.</td>
</tr>
<tr>
    <td><a href="#create_application_instance"><CopyableCode code="create_application_instance" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-DefaultRuntimeContextDevice"><code>DefaultRuntimeContextDevice</code></a>, <a href="#parameter-ManifestPayload"><code>ManifestPayload</code></a></td>
    <td></td>
    <td>Creates an application instance and deploys it to a device.</td>
</tr>
<tr>
    <td><a href="#remove_application_instance"><CopyableCode code="remove_application_instance" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-application_instance_id"><code>application_instance_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Removes an application instance.</td>
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
<tr id="parameter-application_instance_id">
    <td><CopyableCode code="application_instance_id" /></td>
    <td><code>string</code></td>
    <td>An application instance ID.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-deviceId">
    <td><CopyableCode code="deviceId" /></td>
    <td><code>string</code></td>
    <td>The application instances' device ID.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of application instances to return in one page of results.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>Specify the pagination token from a previous request to retrieve the next page of results.</td>
</tr>
<tr id="parameter-statusFilter">
    <td><CopyableCode code="statusFilter" /></td>
    <td><code>string</code></td>
    <td>Only include instances with a specific status.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_application_instance"
    values={[
        { label: 'describe_application_instance', value: 'describe_application_instance' },
        { label: 'list_application_instances', value: 'list_application_instances' }
    ]}
>
<TabItem value="describe_application_instance">

Returns information about an application instance on a device.

```sql
SELECT
application_instance_id,
application_instance_id_to_replace,
arn,
created_time,
default_runtime_context_device,
default_runtime_context_device_name,
description,
health_status,
last_updated_time,
name,
runtime_context_states,
runtime_role_arn,
status,
status_description,
tags
FROM aws.panorama.application_instances
WHERE application_instance_id = '{{ application_instance_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_application_instances">

Returns a list of application instances.

```sql
SELECT
application_instances,
next_token
FROM aws.panorama.application_instances
WHERE region = '{{ region }}' -- required
AND deviceId = '{{ deviceId }}'
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
AND statusFilter = '{{ statusFilter }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_application_instance"
    values={[
        { label: 'create_application_instance', value: 'create_application_instance' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_application_instance">

Creates an application instance and deploys it to a device.

```sql
INSERT INTO aws.panorama.application_instances (
ApplicationInstanceIdToReplace,
DefaultRuntimeContextDevice,
Description,
ManifestOverridesPayload,
ManifestPayload,
Name,
RuntimeRoleArn,
Tags,
region
)
SELECT 
'{{ ApplicationInstanceIdToReplace }}',
'{{ DefaultRuntimeContextDevice }}' /* required */,
'{{ Description }}',
'{{ ManifestOverridesPayload }}',
'{{ ManifestPayload }}' /* required */,
'{{ Name }}',
'{{ RuntimeRoleArn }}',
'{{ Tags }}',
'{{ region }}'
RETURNING
application_instance_id
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: application_instances
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the application_instances resource.
    - name: ApplicationInstanceIdToReplace
      value: "{{ ApplicationInstanceIdToReplace }}"
    - name: DefaultRuntimeContextDevice
      value: "{{ DefaultRuntimeContextDevice }}"
    - name: Description
      value: "{{ Description }}"
    - name: ManifestOverridesPayload
      description: |
        Parameter overrides for an application instance. This is a JSON document that has a single key (PayloadData) where the value is an escaped string representation of the overrides document.
      value:
        PayloadData: "{{ PayloadData }}"
    - name: ManifestPayload
      description: |
        A application verion's manifest file. This is a JSON document that has a single key (PayloadData) where the value is an escaped string representation of the application manifest (graph.json). This file is located in the graphs folder in your application source.
      value:
        PayloadData: "{{ PayloadData }}"
    - name: Name
      value: "{{ Name }}"
    - name: RuntimeRoleArn
      value: "{{ RuntimeRoleArn }}"
    - name: Tags
      value: "{{ Tags }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="remove_application_instance"
    values={[
        { label: 'remove_application_instance', value: 'remove_application_instance' }
    ]}
>
<TabItem value="remove_application_instance">

Removes an application instance.

```sql
UPDATE aws.panorama.application_instances
SET 
-- No updatable properties
WHERE 
application_instance_id = '{{ application_instance_id }}' --required
AND region = '{{ region }}' --required;
```
</TabItem>
</Tabs>
