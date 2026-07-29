--- 
title: contexts
hide_title: false
hide_table_of_contents: false
keywords:
  - contexts
  - sagemaker
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

Creates, updates, deletes, gets or lists a <code>contexts</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="contexts" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.sagemaker.contexts" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_context"
    values={[
        { label: 'describe_context', value: 'describe_context' },
        { label: 'list_contexts', value: 'list_contexts' }
    ]}
>
<TabItem value="describe_context">

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
    <td><CopyableCode code="context_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the context. (pattern: &lt;code&gt;arn:aws&#91;a-z\-&#93;*:sagemaker:&#91;a-z0-9\-&#93;*:&#91;0-9&#93;&#123;12&#125;:context/.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="context_name" /></td>
    <td><code>string</code></td>
    <td>The name of the context. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;(&#91;-_&#93;*&#91;a-zA-Z0-9&#93;)&#123;0,119&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="context_type" /></td>
    <td><code>string</code></td>
    <td>The type of the context.</td>
</tr>
<tr>
    <td><CopyableCode code="created_by" /></td>
    <td><code>object</code></td>
    <td>Information about the user who created or modified a SageMaker resource.</td>
</tr>
<tr>
    <td><CopyableCode code="creation_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>When the context was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the context. (pattern: &lt;code&gt;.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="last_modified_by" /></td>
    <td><code>object</code></td>
    <td>Information about the user who created or modified a SageMaker resource.</td>
</tr>
<tr>
    <td><CopyableCode code="last_modified_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>When the context was last modified.</td>
</tr>
<tr>
    <td><CopyableCode code="lineage_group_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the lineage group. (pattern: &lt;code&gt;arn:aws&#91;a-z\-&#93;*:sagemaker:&#91;a-z0-9\-&#93;*:&#91;0-9&#93;&#123;12&#125;:lineage-group/.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="properties" /></td>
    <td><code>object</code></td>
    <td>A list of the context's properties.</td>
</tr>
<tr>
    <td><CopyableCode code="source" /></td>
    <td><code>object</code></td>
    <td>The source of the context.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_contexts">

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
    <td><CopyableCode code="context_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the context. (pattern: &lt;code&gt;arn:aws&#91;a-z\-&#93;*:sagemaker:&#91;a-z0-9\-&#93;*:&#91;0-9&#93;&#123;12&#125;:context/.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="context_name" /></td>
    <td><code>string</code></td>
    <td>The name of the context. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;(&#91;-_&#93;*&#91;a-zA-Z0-9&#93;)&#123;0,119&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="context_type" /></td>
    <td><code>string</code></td>
    <td>The type of the context.</td>
</tr>
<tr>
    <td><CopyableCode code="creation_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>When the context was created.</td>
</tr>
<tr>
    <td><CopyableCode code="last_modified_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>When the context was last modified.</td>
</tr>
<tr>
    <td><CopyableCode code="source" /></td>
    <td><code>object</code></td>
    <td>The source of the context.</td>
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
    <td><a href="#describe_context"><CopyableCode code="describe_context" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Describes a context.</td>
</tr>
<tr>
    <td><a href="#list_contexts"><CopyableCode code="list_contexts" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists the contexts in your account and their properties.</td>
</tr>
<tr>
    <td><a href="#create_context"><CopyableCode code="create_context" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ContextName"><code>ContextName</code></a>, <a href="#parameter-ContextType"><code>ContextType</code></a></td>
    <td></td>
    <td>Creates a context. A context is a lineage tracking entity that represents a logical grouping of other tracking or experiment entities. Some examples are an endpoint and a model package. For more information, see Amazon SageMaker ML Lineage Tracking.</td>
</tr>
<tr>
    <td><a href="#update_context"><CopyableCode code="update_context" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ContextName"><code>ContextName</code></a></td>
    <td></td>
    <td>Updates a context.</td>
</tr>
<tr>
    <td><a href="#delete_context"><CopyableCode code="delete_context" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes an context.</td>
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
    defaultValue="describe_context"
    values={[
        { label: 'describe_context', value: 'describe_context' },
        { label: 'list_contexts', value: 'list_contexts' }
    ]}
>
<TabItem value="describe_context">

Describes a context.

```sql
SELECT
context_arn,
context_name,
context_type,
created_by,
creation_time,
description,
last_modified_by,
last_modified_time,
lineage_group_arn,
properties,
source
FROM aws.sagemaker.contexts
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_contexts">

Lists the contexts in your account and their properties.

```sql
SELECT
context_arn,
context_name,
context_type,
creation_time,
last_modified_time,
source
FROM aws.sagemaker.contexts
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_context"
    values={[
        { label: 'create_context', value: 'create_context' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_context">

Creates a context. A context is a lineage tracking entity that represents a logical grouping of other tracking or experiment entities. Some examples are an endpoint and a model package. For more information, see Amazon SageMaker ML Lineage Tracking.

```sql
INSERT INTO aws.sagemaker.contexts (
ContextName,
Source,
ContextType,
Description,
Properties,
Tags,
region
)
SELECT 
'{{ ContextName }}' /* required */,
'{{ Source }}',
'{{ ContextType }}' /* required */,
'{{ Description }}',
'{{ Properties }}',
'{{ Tags }}',
'{{ region }}'
RETURNING
context_arn
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: contexts
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the contexts resource.
    - name: ContextName
      value: "{{ ContextName }}"
      description: |
        The name of the context. Must be unique to your account in an Amazon Web Services Region.
    - name: Source
      description: |
        The source type, ID, and URI.
      value:
        SourceUri: "{{ SourceUri }}"
        SourceType: "{{ SourceType }}"
        SourceId: "{{ SourceId }}"
    - name: ContextType
      value: "{{ ContextType }}"
      description: |
        The context type.
    - name: Description
      value: "{{ Description }}"
      description: |
        The description of the context.
    - name: Properties
      value: "{{ Properties }}"
      description: |
        A list of properties to add to the context.
    - name: Tags
      description: |
        A list of tags to apply to the context.
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_context"
    values={[
        { label: 'update_context', value: 'update_context' }
    ]}
>
<TabItem value="update_context">

Updates a context.

```sql
UPDATE aws.sagemaker.contexts
SET 
ContextName = '{{ ContextName }}',
Description = '{{ Description }}',
Properties = '{{ Properties }}',
PropertiesToRemove = '{{ PropertiesToRemove }}'
WHERE 
region = '{{ region }}' --required
AND ContextName = '{{ ContextName }}' --required
RETURNING
context_arn;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_context"
    values={[
        { label: 'delete_context', value: 'delete_context' }
    ]}
>
<TabItem value="delete_context">

Deletes an context.

```sql
DELETE FROM aws.sagemaker.contexts
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
