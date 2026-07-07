--- 
title: capabilities
hide_title: false
hide_table_of_contents: false
keywords:
  - capabilities
  - opensearch
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

Creates, updates, deletes, gets or lists a <code>capabilities</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="capabilities" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.opensearch.capabilities" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_capability"
    values={[
        { label: 'get_capability', value: 'get_capability' }
    ]}
>
<TabItem value="get_capability">

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
    <td><CopyableCode code="applicationId" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the OpenSearch UI application. (pattern: &lt;code&gt;&#91;a-z0-9&#93;&#123;3,30&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="capabilityConfig" /></td>
    <td><code>object</code></td>
    <td>The configuration settings for the capability, including capability-specific settings such as AI configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="capabilityName" /></td>
    <td><code>string</code></td>
    <td>The name of a capability. Must be between 3 and 30 characters and contain only alphanumeric characters and hyphens. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9-&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="failures" /></td>
    <td><code>array</code></td>
    <td>A list of failures associated with the capability, if any. Each failure includes a reason and details about what went wrong.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current status of the capability. Possible values: creating, create_failed, active, updating, update_failed, deleting, delete_failed. (creating, create_failed, active, updating, update_failed, deleting, delete_failed)</td>
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
    <td><a href="#get_capability"><CopyableCode code="get_capability" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-application_id"><code>application_id</code></a>, <a href="#parameter-capability_name"><code>capability_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves information about a registered capability for an OpenSearch UI application, including its configuration and current status.</td>
</tr>
<tr>
    <td><a href="#register_capability"><CopyableCode code="register_capability" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-application_id"><code>application_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-capabilityName"><code>capabilityName</code></a>, <a href="#parameter-capabilityConfig"><code>capabilityConfig</code></a></td>
    <td></td>
    <td>Registers a capability for an OpenSearch UI application. Use this operation to enable specific capabilities, such as AI features, for a given application. The capability configuration defines the type and settings of the capability to register. For more information about the AI features, see Agentic AI for OpenSearch UI.</td>
</tr>
<tr>
    <td><a href="#deregister_capability"><CopyableCode code="deregister_capability" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-application_id"><code>application_id</code></a>, <a href="#parameter-capability_name"><code>capability_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deregisters a capability from an OpenSearch UI application. This operation removes the capability and its associated configuration.</td>
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
<tr id="parameter-application_id">
    <td><CopyableCode code="application_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the OpenSearch UI application to deregister the capability from.</td>
</tr>
<tr id="parameter-capability_name">
    <td><CopyableCode code="capability_name" /></td>
    <td><code>string</code></td>
    <td>The name of the capability to deregister.</td>
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
    defaultValue="get_capability"
    values={[
        { label: 'get_capability', value: 'get_capability' }
    ]}
>
<TabItem value="get_capability">

Retrieves information about a registered capability for an OpenSearch UI application, including its configuration and current status.

```sql
SELECT
applicationId,
capabilityConfig,
capabilityName,
failures,
status
FROM aws.opensearch.capabilities
WHERE application_id = '{{ application_id }}' -- required
AND capability_name = '{{ capability_name }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="register_capability"
    values={[
        { label: 'register_capability', value: 'register_capability' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="register_capability">

Registers a capability for an OpenSearch UI application. Use this operation to enable specific capabilities, such as AI features, for a given application. The capability configuration defines the type and settings of the capability to register. For more information about the AI features, see Agentic AI for OpenSearch UI.

```sql
INSERT INTO aws.opensearch.capabilities (
capabilityName,
capabilityConfig,
application_id,
region
)
SELECT 
'{{ capabilityName }}' /* required */,
'{{ capabilityConfig }}' /* required */,
'{{ application_id }}',
'{{ region }}'
RETURNING
applicationId,
capabilityConfig,
capabilityName,
status
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: capabilities
  props:
    - name: application_id
      value: "{{ application_id }}"
      description: Required parameter for the capabilities resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the capabilities resource.
    - name: capabilityName
      value: "{{ capabilityName }}"
      description: |
        The name of a capability. Must be between 3 and 30 characters and contain only alphanumeric characters and hyphens.
    - name: capabilityConfig
      description: |
        The base configuration for registering a capability. Contains capability-specific configuration such as AI settings.
      value:
        aiConfig: "{{ aiConfig }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="deregister_capability"
    values={[
        { label: 'deregister_capability', value: 'deregister_capability' }
    ]}
>
<TabItem value="deregister_capability">

Deregisters a capability from an OpenSearch UI application. This operation removes the capability and its associated configuration.

```sql
DELETE FROM aws.opensearch.capabilities
WHERE application_id = '{{ application_id }}' --required
AND capability_name = '{{ capability_name }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
