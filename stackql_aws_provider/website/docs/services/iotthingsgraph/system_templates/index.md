--- 
title: system_templates
hide_title: false
hide_table_of_contents: false
keywords:
  - system_templates
  - iotthingsgraph
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

Creates, updates, deletes, gets or lists a <code>system_templates</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="system_templates" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.iotthingsgraph.system_templates" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_system_template"
    values={[
        { label: 'get_system_template', value: 'get_system_template' },
        { label: 'search_system_templates', value: 'search_system_templates' }
    ]}
>
<TabItem value="get_system_template">

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
    <td><CopyableCode code="definition" /></td>
    <td><code>object</code></td>
    <td>A document that defines an entity.</td>
</tr>
<tr>
    <td><CopyableCode code="summary" /></td>
    <td><code>object</code></td>
    <td>An object that contains summary information about a system.</td>
</tr>
<tr>
    <td><CopyableCode code="validatedNamespaceVersion" /></td>
    <td><code>integer (int64)</code></td>
    <td>The namespace version against which the system was validated. Use this value in your system instance.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="search_system_templates">

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
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The ID of the system. (pattern: &lt;code&gt;^urn:tdm:((&#91;a-z&#93;&#123;2&#125;-(gov-)?&#91;a-z&#93;&#123;4,9&#125;-&#91;0-9&#93;&#123;1,3&#125;/&#91;0-9&#93;+/)*&#91;\p&#123;Alnum&#125;_&#93;+(/&#91;\p&#123;Alnum&#125;_&#93;+)*):(&#91;\p&#123;Alpha&#125;&#93;*):(&#91;\p&#123;Alnum&#125;_&#93;+(/&#91;\p&#123;Alnum&#125;_&#93;+)*)$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the system.</td>
</tr>
<tr>
    <td><CopyableCode code="createdAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date when the system was created.</td>
</tr>
<tr>
    <td><CopyableCode code="revisionNumber" /></td>
    <td><code>integer (int64)</code></td>
    <td>The revision number of the system.</td>
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
    <td><a href="#get_system_template"><CopyableCode code="get_system_template" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets a system.</td>
</tr>
<tr>
    <td><a href="#search_system_templates"><CopyableCode code="search_system_templates" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Searches for summary information about systems in the user's account. You can filter by the ID of a workflow to return only systems that use the specified workflow.</td>
</tr>
<tr>
    <td><a href="#create_system_template"><CopyableCode code="create_system_template" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-definition"><code>definition</code></a></td>
    <td></td>
    <td>Creates a system. The system is validated against the entities in the latest version of the user's namespace unless another namespace version is specified in the request.</td>
</tr>
<tr>
    <td><a href="#update_system_template"><CopyableCode code="update_system_template" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-id"><code>id</code></a>, <a href="#parameter-definition"><code>definition</code></a></td>
    <td></td>
    <td>Updates the specified system. You don't need to run this action after updating a workflow. Any deployment that uses the system will see the changes in the system when it is redeployed.</td>
</tr>
<tr>
    <td><a href="#delete_system_template"><CopyableCode code="delete_system_template" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a system. New deployments can't contain the system after its deletion. Existing deployments that contain the system will continue to work because they use a snapshot of the system that is taken when it is deployed.</td>
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
    defaultValue="get_system_template"
    values={[
        { label: 'get_system_template', value: 'get_system_template' },
        { label: 'search_system_templates', value: 'search_system_templates' }
    ]}
>
<TabItem value="get_system_template">

Gets a system.

```sql
SELECT
definition,
summary,
validatedNamespaceVersion
FROM aws.iotthingsgraph.system_templates
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="search_system_templates">

Searches for summary information about systems in the user's account. You can filter by the ID of a workflow to return only systems that use the specified workflow.

```sql
SELECT
id,
arn,
createdAt,
revisionNumber
FROM aws.iotthingsgraph.system_templates
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_system_template"
    values={[
        { label: 'create_system_template', value: 'create_system_template' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_system_template">

Creates a system. The system is validated against the entities in the latest version of the user's namespace unless another namespace version is specified in the request.

```sql
INSERT INTO aws.iotthingsgraph.system_templates (
definition,
compatibleNamespaceVersion,
region
)
SELECT 
'{{ definition }}' /* required */,
{{ compatibleNamespaceVersion }},
'{{ region }}'
RETURNING
summary
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: system_templates
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the system_templates resource.
    - name: definition
      description: |
        A document that defines an entity.
      value:
        language: "{{ language }}"
        text: "{{ text }}"
    - name: compatibleNamespaceVersion
      value: {{ compatibleNamespaceVersion }}
      description: |
        The namespace version in which the system is to be created. If no value is specified, the latest version is used by default.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_system_template"
    values={[
        { label: 'update_system_template', value: 'update_system_template' }
    ]}
>
<TabItem value="update_system_template">

Updates the specified system. You don't need to run this action after updating a workflow. Any deployment that uses the system will see the changes in the system when it is redeployed.

```sql
UPDATE aws.iotthingsgraph.system_templates
SET 
id = '{{ id }}',
definition = '{{ definition }}',
compatibleNamespaceVersion = {{ compatibleNamespaceVersion }}
WHERE 
region = '{{ region }}' --required
AND id = '{{ id }}' --required
AND definition = '{{ definition }}' --required
RETURNING
summary;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_system_template"
    values={[
        { label: 'delete_system_template', value: 'delete_system_template' }
    ]}
>
<TabItem value="delete_system_template">

Deletes a system. New deployments can't contain the system after its deletion. Existing deployments that contain the system will continue to work because they use a snapshot of the system that is taken when it is deployed.

```sql
DELETE FROM aws.iotthingsgraph.system_templates
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
