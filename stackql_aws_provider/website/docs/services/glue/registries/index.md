--- 
title: registries
hide_title: false
hide_table_of_contents: false
keywords:
  - registries
  - glue
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

Creates, updates, deletes, gets or lists a <code>registries</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="registries" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.glue.registries" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_registry"
    values={[
        { label: 'get_registry', value: 'get_registry' },
        { label: 'list_registries', value: 'list_registries' }
    ]}
>
<TabItem value="get_registry">

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
    <td><CopyableCode code="created_time" /></td>
    <td><code>string</code></td>
    <td>The date and time the registry was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>A description of the registry. (pattern: &lt;code&gt;&#91;\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\r\n\t&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="registry_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the registry. (pattern: &lt;code&gt;arn:aws(-(cn|us-gov|iso(-&#91;bef&#93;)?))?:glue:.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="registry_name" /></td>
    <td><code>string</code></td>
    <td>The name of the registry. (pattern: &lt;code&gt;&#91;a-zA-Z0-9-_$#.&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the registry. (AVAILABLE, DELETING)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_time" /></td>
    <td><code>string</code></td>
    <td>The date and time the registry was updated.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_registries">

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
    <td><CopyableCode code="created_time" /></td>
    <td><code>string</code></td>
    <td>The data the registry was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>A description of the registry. (pattern: &lt;code&gt;&#91;\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\r\n\t&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="registry_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the registry. (pattern: &lt;code&gt;arn:aws(-(cn|us-gov|iso(-&#91;bef&#93;)?))?:glue:.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="registry_name" /></td>
    <td><code>string</code></td>
    <td>The name of the registry. (pattern: &lt;code&gt;&#91;a-zA-Z0-9-_$#.&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the registry. (AVAILABLE, DELETING)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_time" /></td>
    <td><code>string</code></td>
    <td>The date the registry was updated.</td>
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
    <td><a href="#get_registry"><CopyableCode code="get_registry" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Describes the specified registry in detail.</td>
</tr>
<tr>
    <td><a href="#list_registries"><CopyableCode code="list_registries" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns a list of registries that you have created, with minimal registry information. Registries in the Deleting status will not be included in the results. Empty results will be returned if there are no registries available.</td>
</tr>
<tr>
    <td><a href="#create_registry"><CopyableCode code="create_registry" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-RegistryName"><code>RegistryName</code></a></td>
    <td></td>
    <td>Creates a new registry which may be used to hold a collection of schemas.</td>
</tr>
<tr>
    <td><a href="#update_registry"><CopyableCode code="update_registry" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-RegistryId"><code>RegistryId</code></a></td>
    <td></td>
    <td>Updates an existing registry which is used to hold a collection of schemas. The updated properties relate to the registry, and do not modify any of the schemas within the registry.</td>
</tr>
<tr>
    <td><a href="#delete_registry"><CopyableCode code="delete_registry" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Delete the entire registry including schema and all of its versions. To get the status of the delete operation, you can call the GetRegistry API after the asynchronous call. Deleting a registry will deactivate all online operations for the registry such as the UpdateRegistry, CreateSchema, UpdateSchema, and RegisterSchemaVersion APIs.</td>
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
    defaultValue="get_registry"
    values={[
        { label: 'get_registry', value: 'get_registry' },
        { label: 'list_registries', value: 'list_registries' }
    ]}
>
<TabItem value="get_registry">

Describes the specified registry in detail.

```sql
SELECT
created_time,
description,
registry_arn,
registry_name,
status,
updated_time
FROM aws.glue.registries
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_registries">

Returns a list of registries that you have created, with minimal registry information. Registries in the Deleting status will not be included in the results. Empty results will be returned if there are no registries available.

```sql
SELECT
created_time,
description,
registry_arn,
registry_name,
status,
updated_time
FROM aws.glue.registries
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_registry"
    values={[
        { label: 'create_registry', value: 'create_registry' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_registry">

Creates a new registry which may be used to hold a collection of schemas.

```sql
INSERT INTO aws.glue.registries (
RegistryName,
Description,
Tags,
region
)
SELECT 
'{{ RegistryName }}' /* required */,
'{{ Description }}',
'{{ Tags }}',
'{{ region }}'
RETURNING
description,
registry_arn,
registry_name,
tags
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: registries
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the registries resource.
    - name: RegistryName
      value: "{{ RegistryName }}"
      description: |
        Name of the registry to be created of max length of 255, and may only contain letters, numbers, hyphen, underscore, dollar sign, or hash mark. No whitespace.
    - name: Description
      value: "{{ Description }}"
      description: |
        A description of the registry. If description is not provided, there will not be any default value for this.
    - name: Tags
      value: "{{ Tags }}"
      description: |
        Amazon Web Services tags that contain a key value pair and may be searched by console, command line, or API.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_registry"
    values={[
        { label: 'update_registry', value: 'update_registry' }
    ]}
>
<TabItem value="update_registry">

Updates an existing registry which is used to hold a collection of schemas. The updated properties relate to the registry, and do not modify any of the schemas within the registry.

```sql
UPDATE aws.glue.registries
SET 
RegistryId = '{{ RegistryId }}',
Description = '{{ Description }}'
WHERE 
region = '{{ region }}' --required
AND RegistryId = '{{ RegistryId }}' --required
RETURNING
registry_arn,
registry_name;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_registry"
    values={[
        { label: 'delete_registry', value: 'delete_registry' }
    ]}
>
<TabItem value="delete_registry">

Delete the entire registry including schema and all of its versions. To get the status of the delete operation, you can call the GetRegistry API after the asynchronous call. Deleting a registry will deactivate all online operations for the registry such as the UpdateRegistry, CreateSchema, UpdateSchema, and RegisterSchemaVersion APIs.

```sql
DELETE FROM aws.glue.registries
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
