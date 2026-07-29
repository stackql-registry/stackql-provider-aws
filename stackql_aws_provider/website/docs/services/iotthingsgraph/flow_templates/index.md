--- 
title: flow_templates
hide_title: false
hide_table_of_contents: false
keywords:
  - flow_templates
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

Creates, updates, deletes, gets or lists a <code>flow_templates</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="flow_templates" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.iotthingsgraph.flow_templates" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_flow_template"
    values={[
        { label: 'get_flow_template', value: 'get_flow_template' },
        { label: 'search_flow_templates', value: 'search_flow_templates' }
    ]}
>
<TabItem value="get_flow_template">

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
    <td>An object that contains summary information about a workflow.</td>
</tr>
<tr>
    <td><CopyableCode code="validated_namespace_version" /></td>
    <td><code>integer (int64)</code></td>
    <td>The version of the user's namespace against which the workflow was validated. Use this value in your system instance.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="search_flow_templates">

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
    <td>The ID of the workflow. (pattern: &lt;code&gt;^urn:tdm:((&#91;a-z&#93;&#123;2&#125;-(gov-)?&#91;a-z&#93;&#123;4,9&#125;-&#91;0-9&#93;&#123;1,3&#125;/&#91;0-9&#93;+/)*&#91;\p&#123;Alnum&#125;_&#93;+(/&#91;\p&#123;Alnum&#125;_&#93;+)*):(&#91;\p&#123;Alpha&#125;&#93;*):(&#91;\p&#123;Alnum&#125;_&#93;+(/&#91;\p&#123;Alnum&#125;_&#93;+)*)$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the workflow.</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date when the workflow was created.</td>
</tr>
<tr>
    <td><CopyableCode code="revision_number" /></td>
    <td><code>integer (int64)</code></td>
    <td>The revision number of the workflow.</td>
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
    <td><a href="#get_flow_template"><CopyableCode code="get_flow_template" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets the latest version of the DefinitionDocument and FlowTemplateSummary for the specified workflow.</td>
</tr>
<tr>
    <td><a href="#search_flow_templates"><CopyableCode code="search_flow_templates" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Searches for summary information about workflows.</td>
</tr>
<tr>
    <td><a href="#create_flow_template"><CopyableCode code="create_flow_template" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-definition"><code>definition</code></a></td>
    <td></td>
    <td>Creates a workflow template. Workflows can be created only in the user's namespace. (The public namespace contains only entities.) The workflow can contain only entities in the specified namespace. The workflow is validated against the entities in the latest version of the user's namespace unless another namespace version is specified in the request.</td>
</tr>
<tr>
    <td><a href="#update_flow_template"><CopyableCode code="update_flow_template" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-id"><code>id</code></a>, <a href="#parameter-definition"><code>definition</code></a></td>
    <td></td>
    <td>Updates the specified workflow. All deployed systems and system instances that use the workflow will see the changes in the flow when it is redeployed. If you don't want this behavior, copy the workflow (creating a new workflow with a different ID), and update the copy. The workflow can contain only entities in the specified namespace.</td>
</tr>
<tr>
    <td><a href="#delete_flow_template"><CopyableCode code="delete_flow_template" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a workflow. Any new system or deployment that contains this workflow will fail to update or deploy. Existing deployments that contain the workflow will continue to run (since they use a snapshot of the workflow taken at the time of deployment).</td>
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
    defaultValue="get_flow_template"
    values={[
        { label: 'get_flow_template', value: 'get_flow_template' },
        { label: 'search_flow_templates', value: 'search_flow_templates' }
    ]}
>
<TabItem value="get_flow_template">

Gets the latest version of the DefinitionDocument and FlowTemplateSummary for the specified workflow.

```sql
SELECT
definition,
summary,
validated_namespace_version
FROM aws.iotthingsgraph.flow_templates
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="search_flow_templates">

Searches for summary information about workflows.

```sql
SELECT
id,
arn,
created_at,
revision_number
FROM aws.iotthingsgraph.flow_templates
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_flow_template"
    values={[
        { label: 'create_flow_template', value: 'create_flow_template' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_flow_template">

Creates a workflow template. Workflows can be created only in the user's namespace. (The public namespace contains only entities.) The workflow can contain only entities in the specified namespace. The workflow is validated against the entities in the latest version of the user's namespace unless another namespace version is specified in the request.

```sql
INSERT INTO aws.iotthingsgraph.flow_templates (
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
- name: flow_templates
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the flow_templates resource.
    - name: definition
      description: |
        The workflow DefinitionDocument.
      value:
        language: "{{ language }}"
        text: "{{ text }}"
    - name: compatibleNamespaceVersion
      value: {{ compatibleNamespaceVersion }}
      description: |
        The namespace version in which the workflow is to be created. If no value is specified, the latest version is used by default.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_flow_template"
    values={[
        { label: 'update_flow_template', value: 'update_flow_template' }
    ]}
>
<TabItem value="update_flow_template">

Updates the specified workflow. All deployed systems and system instances that use the workflow will see the changes in the flow when it is redeployed. If you don't want this behavior, copy the workflow (creating a new workflow with a different ID), and update the copy. The workflow can contain only entities in the specified namespace.

```sql
UPDATE aws.iotthingsgraph.flow_templates
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
    defaultValue="delete_flow_template"
    values={[
        { label: 'delete_flow_template', value: 'delete_flow_template' }
    ]}
>
<TabItem value="delete_flow_template">

Deletes a workflow. Any new system or deployment that contains this workflow will fail to update or deploy. Existing deployments that contain the workflow will continue to run (since they use a snapshot of the workflow taken at the time of deployment).

```sql
DELETE FROM aws.iotthingsgraph.flow_templates
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
