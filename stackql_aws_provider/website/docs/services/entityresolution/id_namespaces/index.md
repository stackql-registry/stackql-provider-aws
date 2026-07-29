--- 
title: id_namespaces
hide_title: false
hide_table_of_contents: false
keywords:
  - id_namespaces
  - entityresolution
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

Creates, updates, deletes, gets or lists an <code>id_namespaces</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="id_namespaces" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.entityresolution.id_namespaces" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_id_namespace"
    values={[
        { label: 'get_id_namespace', value: 'get_id_namespace' },
        { label: 'list_id_namespaces', value: 'list_id_namespaces' }
    ]}
>
<TabItem value="get_id_namespace">

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
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp of when the ID namespace was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the ID namespace.</td>
</tr>
<tr>
    <td><CopyableCode code="id_mapping_workflow_properties" /></td>
    <td><code>array</code></td>
    <td>Determines the properties of IdMappingWorkflow where this IdNamespace can be used as a Source or a Target.</td>
</tr>
<tr>
    <td><CopyableCode code="id_namespace_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the ID namespace. (pattern: &lt;code&gt;arn:(aws|aws-us-gov|aws-cn):entityresolution:&#91;a-z&#93;&#123;2&#125;-&#91;a-z&#93;&#123;1,10&#125;-&#91;0-9&#93;:&#91;0-9&#93;&#123;12&#125;:(idnamespace/&#91;a-zA-Z_0-9-&#93;&#123;1,255&#125;)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="id_namespace_name" /></td>
    <td><code>string</code></td>
    <td>The name of the ID namespace. (pattern: &lt;code&gt;&#91;a-zA-Z_0-9-&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="input_source_config" /></td>
    <td><code>array</code></td>
    <td>A list of InputSource objects, which have the fields InputSourceARN and SchemaName.</td>
</tr>
<tr>
    <td><CopyableCode code="role_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the IAM role. Entity Resolution assumes this role to access the resources defined in this IdNamespace on your behalf as part of a workflow run. (pattern: &lt;code&gt;arn:aws:iam::\d&#123;12&#125;:role/?&#91;a-zA-Z_0-9+=,.@\-_/&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>The tags used to organize, track, or control access for this resource.</td>
</tr>
<tr>
    <td><CopyableCode code="type_" /></td>
    <td><code>string</code></td>
    <td>The type of ID namespace. There are two types: SOURCE and TARGET. The SOURCE contains configurations for sourceId data that will be processed in an ID mapping workflow. The TARGET contains a configuration of targetId to which all sourceIds will resolve to. (SOURCE, TARGET)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp of when the ID namespace was last updated.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_id_namespaces">

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
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp of when the ID namespace was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the ID namespace.</td>
</tr>
<tr>
    <td><CopyableCode code="id_mapping_workflow_properties" /></td>
    <td><code>array</code></td>
    <td>An object which defines any additional configurations required by the ID mapping workflow.</td>
</tr>
<tr>
    <td><CopyableCode code="id_namespace_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the ID namespace. (pattern: &lt;code&gt;arn:(aws|aws-us-gov|aws-cn):entityresolution:&#91;a-z&#93;&#123;2&#125;-&#91;a-z&#93;&#123;1,10&#125;-&#91;0-9&#93;:&#91;0-9&#93;&#123;12&#125;:(idnamespace/&#91;a-zA-Z_0-9-&#93;&#123;1,255&#125;)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="id_namespace_name" /></td>
    <td><code>string</code></td>
    <td>The name of the ID namespace. (pattern: &lt;code&gt;&#91;a-zA-Z_0-9-&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="type_" /></td>
    <td><code>string</code></td>
    <td>The type of ID namespace. There are two types: SOURCE and TARGET. The SOURCE contains configurations for sourceId data that will be processed in an ID mapping workflow. The TARGET contains a configuration of targetId which all sourceIds will resolve to. (SOURCE, TARGET)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp of when the ID namespace was last updated.</td>
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
    <td><a href="#get_id_namespace"><CopyableCode code="get_id_namespace" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-id_namespace_name"><code>id_namespace_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns the IdNamespace with a given name, if it exists.</td>
</tr>
<tr>
    <td><a href="#list_id_namespaces"><CopyableCode code="list_id_namespaces" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a></td>
    <td>Returns a list of all ID namespaces.</td>
</tr>
<tr>
    <td><a href="#create_id_namespace"><CopyableCode code="create_id_namespace" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-idNamespaceName"><code>idNamespaceName</code></a>, <a href="#parameter-type"><code>type</code></a></td>
    <td></td>
    <td>Creates an ID namespace object which will help customers provide metadata explaining their dataset and how to use it. Each ID namespace must have a unique name. To modify an existing ID namespace, use the UpdateIdNamespace API.</td>
</tr>
<tr>
    <td><a href="#update_id_namespace"><CopyableCode code="update_id_namespace" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-id_namespace_name"><code>id_namespace_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates an existing ID namespace.</td>
</tr>
<tr>
    <td><a href="#delete_id_namespace"><CopyableCode code="delete_id_namespace" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-id_namespace_name"><code>id_namespace_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the IdNamespace with a given name.</td>
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
<tr id="parameter-id_namespace_name">
    <td><CopyableCode code="id_namespace_name" /></td>
    <td><code>string</code></td>
    <td>The name of the ID namespace.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of IdNamespace objects returned per page.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The pagination token from the previous API call.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_id_namespace"
    values={[
        { label: 'get_id_namespace', value: 'get_id_namespace' },
        { label: 'list_id_namespaces', value: 'list_id_namespaces' }
    ]}
>
<TabItem value="get_id_namespace">

Returns the IdNamespace with a given name, if it exists.

```sql
SELECT
created_at,
description,
id_mapping_workflow_properties,
id_namespace_arn,
id_namespace_name,
input_source_config,
role_arn,
tags,
type_,
updated_at
FROM aws.entityresolution.id_namespaces
WHERE id_namespace_name = '{{ id_namespace_name }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_id_namespaces">

Returns a list of all ID namespaces.

```sql
SELECT
created_at,
description,
id_mapping_workflow_properties,
id_namespace_arn,
id_namespace_name,
type_,
updated_at
FROM aws.entityresolution.id_namespaces
WHERE region = '{{ region }}' -- required
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_id_namespace"
    values={[
        { label: 'create_id_namespace', value: 'create_id_namespace' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_id_namespace">

Creates an ID namespace object which will help customers provide metadata explaining their dataset and how to use it. Each ID namespace must have a unique name. To modify an existing ID namespace, use the UpdateIdNamespace API.

```sql
INSERT INTO aws.entityresolution.id_namespaces (
idNamespaceName,
description,
inputSourceConfig,
idMappingWorkflowProperties,
type,
roleArn,
tags,
region
)
SELECT 
'{{ idNamespaceName }}' /* required */,
'{{ description }}',
'{{ inputSourceConfig }}',
'{{ idMappingWorkflowProperties }}',
'{{ type }}' /* required */,
'{{ roleArn }}',
'{{ tags }}',
'{{ region }}'
RETURNING
created_at,
description,
id_mapping_workflow_properties,
id_namespace_arn,
id_namespace_name,
input_source_config,
role_arn,
tags,
type_,
updated_at
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: id_namespaces
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the id_namespaces resource.
    - name: idNamespaceName
      value: "{{ idNamespaceName }}"
    - name: description
      value: "{{ description }}"
    - name: inputSourceConfig
      value:
        - inputSourceARN: "{{ inputSourceARN }}"
          schemaName: "{{ schemaName }}"
    - name: idMappingWorkflowProperties
      value:
        - idMappingType: "{{ idMappingType }}"
          ruleBasedProperties:
            rules:
              - ruleName: "{{ ruleName }}"
                matchingKeys: "{{ matchingKeys }}"
            ruleDefinitionTypes:
              - "{{ ruleDefinitionTypes }}"
            attributeMatchingModel: "{{ attributeMatchingModel }}"
            recordMatchingModels:
              - "{{ recordMatchingModels }}"
          providerProperties:
            providerServiceArn: "{{ providerServiceArn }}"
            providerConfiguration: "{{ providerConfiguration }}"
    - name: type
      value: "{{ type }}"
      valid_values: ['SOURCE', 'TARGET']
    - name: roleArn
      value: "{{ roleArn }}"
    - name: tags
      value: "{{ tags }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_id_namespace"
    values={[
        { label: 'update_id_namespace', value: 'update_id_namespace' }
    ]}
>
<TabItem value="update_id_namespace">

Updates an existing ID namespace.

```sql
UPDATE aws.entityresolution.id_namespaces
SET 
description = '{{ description }}',
inputSourceConfig = '{{ inputSourceConfig }}',
idMappingWorkflowProperties = '{{ idMappingWorkflowProperties }}',
roleArn = '{{ roleArn }}'
WHERE 
id_namespace_name = '{{ id_namespace_name }}' --required
AND region = '{{ region }}' --required
RETURNING
created_at,
description,
id_mapping_workflow_properties,
id_namespace_arn,
id_namespace_name,
input_source_config,
role_arn,
type_,
updated_at;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_id_namespace"
    values={[
        { label: 'delete_id_namespace', value: 'delete_id_namespace' }
    ]}
>
<TabItem value="delete_id_namespace">

Deletes the IdNamespace with a given name.

```sql
DELETE FROM aws.entityresolution.id_namespaces
WHERE id_namespace_name = '{{ id_namespace_name }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
