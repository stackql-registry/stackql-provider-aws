--- 
title: schemas
hide_title: false
hide_table_of_contents: false
keywords:
  - schemas
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

Creates, updates, deletes, gets or lists a <code>schemas</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="schemas" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.glue.schemas" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_schema"
    values={[
        { label: 'get_schema', value: 'get_schema' },
        { label: 'list_schemas', value: 'list_schemas' }
    ]}
>
<TabItem value="get_schema">

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
    <td><CopyableCode code="compatibility" /></td>
    <td><code>string</code></td>
    <td>The compatibility mode of the schema. (NONE, DISABLED, BACKWARD, BACKWARD_ALL, FORWARD, FORWARD_ALL, FULL, FULL_ALL)</td>
</tr>
<tr>
    <td><CopyableCode code="created_time" /></td>
    <td><code>string</code></td>
    <td>The date and time the schema was created.</td>
</tr>
<tr>
    <td><CopyableCode code="data_format" /></td>
    <td><code>string</code></td>
    <td>The data format of the schema definition. Currently AVRO, JSON and PROTOBUF are supported. (AVRO, JSON, PROTOBUF)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>A description of schema if specified when created (pattern: &lt;code&gt;&#91;\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\r\n\t&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="latest_schema_version" /></td>
    <td><code>integer (int64)</code></td>
    <td>The latest version of the schema associated with the returned schema definition.</td>
</tr>
<tr>
    <td><CopyableCode code="next_schema_version" /></td>
    <td><code>integer (int64)</code></td>
    <td>The next version of the schema associated with the returned schema definition.</td>
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
    <td><CopyableCode code="schema_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the schema. (pattern: &lt;code&gt;arn:aws(-(cn|us-gov|iso(-&#91;bef&#93;)?))?:glue:.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="schema_checkpoint" /></td>
    <td><code>integer (int64)</code></td>
    <td>The version number of the checkpoint (the last time the compatibility mode was changed).</td>
</tr>
<tr>
    <td><CopyableCode code="schema_name" /></td>
    <td><code>string</code></td>
    <td>The name of the schema. (pattern: &lt;code&gt;&#91;a-zA-Z0-9-_$#.&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="schema_status" /></td>
    <td><code>string</code></td>
    <td>The status of the schema. (AVAILABLE, PENDING, DELETING)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_time" /></td>
    <td><code>string</code></td>
    <td>The date and time the schema was updated.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_schemas">

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
    <td>The date and time that a schema was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>A description for the schema. (pattern: &lt;code&gt;&#91;\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\r\n\t&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="registry_name" /></td>
    <td><code>string</code></td>
    <td>the name of the registry where the schema resides. (pattern: &lt;code&gt;&#91;a-zA-Z0-9-_$#.&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="schema_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) for the schema. (pattern: &lt;code&gt;arn:aws(-(cn|us-gov|iso(-&#91;bef&#93;)?))?:glue:.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="schema_name" /></td>
    <td><code>string</code></td>
    <td>The name of the schema. (pattern: &lt;code&gt;&#91;a-zA-Z0-9-_$#.&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="schema_status" /></td>
    <td><code>string</code></td>
    <td>The status of the schema. (AVAILABLE, PENDING, DELETING)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_time" /></td>
    <td><code>string</code></td>
    <td>The date and time that a schema was updated.</td>
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
    <td><a href="#get_schema"><CopyableCode code="get_schema" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Describes the specified schema in detail.</td>
</tr>
<tr>
    <td><a href="#list_schemas"><CopyableCode code="list_schemas" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns a list of schemas with minimal details. Schemas in Deleting status will not be included in the results. Empty results will be returned if there are no schemas available. When the RegistryId is not provided, all the schemas across registries will be part of the API response.</td>
</tr>
<tr>
    <td><a href="#create_schema"><CopyableCode code="create_schema" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-SchemaName"><code>SchemaName</code></a>, <a href="#parameter-DataFormat"><code>DataFormat</code></a></td>
    <td></td>
    <td>Creates a new schema set and registers the schema definition. Returns an error if the schema set already exists without actually registering the version. When the schema set is created, a version checkpoint will be set to the first version. Compatibility mode "DISABLED" restricts any additional schema versions from being added after the first schema version. For all other compatibility modes, validation of compatibility settings will be applied only from the second version onwards when the RegisterSchemaVersion API is used. When this API is called without a RegistryId, this will create an entry for a "default-registry" in the registry database tables, if it is not already present.</td>
</tr>
<tr>
    <td><a href="#update_schema"><CopyableCode code="update_schema" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-SchemaId"><code>SchemaId</code></a></td>
    <td></td>
    <td>Updates the description, compatibility setting, or version checkpoint for a schema set. For updating the compatibility setting, the call will not validate compatibility for the entire set of schema versions with the new compatibility setting. If the value for Compatibility is provided, the VersionNumber (a checkpoint) is also required. The API will validate the checkpoint version number for consistency. If the value for the VersionNumber (checkpoint) is provided, Compatibility is optional and this can be used to set/reset a checkpoint for the schema. This update will happen only if the schema is in the AVAILABLE state.</td>
</tr>
<tr>
    <td><a href="#delete_schema"><CopyableCode code="delete_schema" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the entire schema set, including the schema set and all of its versions. To get the status of the delete operation, you can call GetSchema API after the asynchronous call. Deleting a registry will deactivate all online operations for the schema, such as the GetSchemaByDefinition, and RegisterSchemaVersion APIs.</td>
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
    defaultValue="get_schema"
    values={[
        { label: 'get_schema', value: 'get_schema' },
        { label: 'list_schemas', value: 'list_schemas' }
    ]}
>
<TabItem value="get_schema">

Describes the specified schema in detail.

```sql
SELECT
compatibility,
created_time,
data_format,
description,
latest_schema_version,
next_schema_version,
registry_arn,
registry_name,
schema_arn,
schema_checkpoint,
schema_name,
schema_status,
updated_time
FROM aws.glue.schemas
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_schemas">

Returns a list of schemas with minimal details. Schemas in Deleting status will not be included in the results. Empty results will be returned if there are no schemas available. When the RegistryId is not provided, all the schemas across registries will be part of the API response.

```sql
SELECT
created_time,
description,
registry_name,
schema_arn,
schema_name,
schema_status,
updated_time
FROM aws.glue.schemas
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_schema"
    values={[
        { label: 'create_schema', value: 'create_schema' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_schema">

Creates a new schema set and registers the schema definition. Returns an error if the schema set already exists without actually registering the version. When the schema set is created, a version checkpoint will be set to the first version. Compatibility mode "DISABLED" restricts any additional schema versions from being added after the first schema version. For all other compatibility modes, validation of compatibility settings will be applied only from the second version onwards when the RegisterSchemaVersion API is used. When this API is called without a RegistryId, this will create an entry for a "default-registry" in the registry database tables, if it is not already present.

```sql
INSERT INTO aws.glue.schemas (
RegistryId,
SchemaName,
DataFormat,
Compatibility,
Description,
Tags,
SchemaDefinition,
region
)
SELECT 
'{{ RegistryId }}',
'{{ SchemaName }}' /* required */,
'{{ DataFormat }}' /* required */,
'{{ Compatibility }}',
'{{ Description }}',
'{{ Tags }}',
'{{ SchemaDefinition }}',
'{{ region }}'
RETURNING
compatibility,
data_format,
description,
latest_schema_version,
next_schema_version,
registry_arn,
registry_name,
schema_arn,
schema_checkpoint,
schema_name,
schema_status,
schema_version_id,
schema_version_status,
tags
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: schemas
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the schemas resource.
    - name: RegistryId
      description: |
        This is a wrapper shape to contain the registry identity fields. If this is not provided, the default registry will be used. The ARN format for the same will be: arn:aws:glue:us-east-2:<customer id>:registry/default-registry:random-5-letter-id.
      value:
        RegistryName: "{{ RegistryName }}"
        RegistryArn: "{{ RegistryArn }}"
    - name: SchemaName
      value: "{{ SchemaName }}"
      description: |
        Name of the schema to be created of max length of 255, and may only contain letters, numbers, hyphen, underscore, dollar sign, or hash mark. No whitespace.
    - name: DataFormat
      value: "{{ DataFormat }}"
      description: |
        The data format of the schema definition. Currently AVRO, JSON and PROTOBUF are supported.
      valid_values: ['AVRO', 'JSON', 'PROTOBUF']
    - name: Compatibility
      value: "{{ Compatibility }}"
      description: |
        The compatibility mode of the schema. The possible values are: NONE: No compatibility mode applies. You can use this choice in development scenarios or if you do not know the compatibility mode that you want to apply to schemas. Any new version added will be accepted without undergoing a compatibility check. DISABLED: This compatibility choice prevents versioning for a particular schema. You can use this choice to prevent future versioning of a schema. BACKWARD: This compatibility choice is recommended as it allows data receivers to read both the current and one previous schema version. This means that for instance, a new schema version cannot drop data fields or change the type of these fields, so they can't be read by readers using the previous version. BACKWARD_ALL: This compatibility choice allows data receivers to read both the current and all previous schema versions. You can use this choice when you need to delete fields or add optional fields, and check compatibility against all previous schema versions. FORWARD: This compatibility choice allows data receivers to read both the current and one next schema version, but not necessarily later versions. You can use this choice when you need to add fields or delete optional fields, but only check compatibility against the last schema version. FORWARD_ALL: This compatibility choice allows data receivers to read written by producers of any new registered schema. You can use this choice when you need to add fields or delete optional fields, and check compatibility against all previous schema versions. FULL: This compatibility choice allows data receivers to read data written by producers using the previous or next version of the schema, but not necessarily earlier or later versions. You can use this choice when you need to add or remove optional fields, but only check compatibility against the last schema version. FULL_ALL: This compatibility choice allows data receivers to read data written by producers using all previous schema versions. You can use this choice when you need to add or remove optional fields, and check compatibility against all previous schema versions.
      valid_values: ['NONE', 'DISABLED', 'BACKWARD', 'BACKWARD_ALL', 'FORWARD', 'FORWARD_ALL', 'FULL', 'FULL_ALL']
    - name: Description
      value: "{{ Description }}"
      description: |
        An optional description of the schema. If description is not provided, there will not be any automatic default value for this.
    - name: Tags
      value: "{{ Tags }}"
      description: |
        Amazon Web Services tags that contain a key value pair and may be searched by console, command line, or API. If specified, follows the Amazon Web Services tags-on-create pattern.
    - name: SchemaDefinition
      value: "{{ SchemaDefinition }}"
      description: |
        The schema definition using the DataFormat setting for SchemaName.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_schema"
    values={[
        { label: 'update_schema', value: 'update_schema' }
    ]}
>
<TabItem value="update_schema">

Updates the description, compatibility setting, or version checkpoint for a schema set. For updating the compatibility setting, the call will not validate compatibility for the entire set of schema versions with the new compatibility setting. If the value for Compatibility is provided, the VersionNumber (a checkpoint) is also required. The API will validate the checkpoint version number for consistency. If the value for the VersionNumber (checkpoint) is provided, Compatibility is optional and this can be used to set/reset a checkpoint for the schema. This update will happen only if the schema is in the AVAILABLE state.

```sql
UPDATE aws.glue.schemas
SET 
SchemaId = '{{ SchemaId }}',
SchemaVersionNumber = '{{ SchemaVersionNumber }}',
Compatibility = '{{ Compatibility }}',
Description = '{{ Description }}'
WHERE 
region = '{{ region }}' --required
AND SchemaId = '{{ SchemaId }}' --required
RETURNING
registry_name,
schema_arn,
schema_name;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_schema"
    values={[
        { label: 'delete_schema', value: 'delete_schema' }
    ]}
>
<TabItem value="delete_schema">

Deletes the entire schema set, including the schema set and all of its versions. To get the status of the delete operation, you can call GetSchema API after the asynchronous call. Deleting a registry will deactivate all online operations for the schema, such as the GetSchemaByDefinition, and RegisterSchemaVersion APIs.

```sql
DELETE FROM aws.glue.schemas
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
