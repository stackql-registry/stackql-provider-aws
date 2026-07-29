--- 
title: schema_versions
hide_title: false
hide_table_of_contents: false
keywords:
  - schema_versions
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

Creates, updates, deletes, gets or lists a <code>schema_versions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="schema_versions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.glue.schema_versions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_schema_versions"
    values={[
        { label: 'list_schema_versions', value: 'list_schema_versions' },
        { label: 'get_schema_version', value: 'get_schema_version' }
    ]}
>
<TabItem value="list_schema_versions">

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
    <td>The date and time the schema version was created.</td>
</tr>
<tr>
    <td><CopyableCode code="schema_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the schema. (pattern: &lt;code&gt;arn:aws(-(cn|us-gov|iso(-&#91;bef&#93;)?))?:glue:.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="schema_version_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the schema version. (pattern: &lt;code&gt;&#91;a-f0-9&#93;&#123;8&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the schema version. (AVAILABLE, PENDING, FAILURE, DELETING)</td>
</tr>
<tr>
    <td><CopyableCode code="version_number" /></td>
    <td><code>integer (int64)</code></td>
    <td>The version number of the schema.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="get_schema_version">

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
    <td>The date and time the schema version was created.</td>
</tr>
<tr>
    <td><CopyableCode code="data_format" /></td>
    <td><code>string</code></td>
    <td>The data format of the schema definition. Currently AVRO, JSON and PROTOBUF are supported. (AVRO, JSON, PROTOBUF)</td>
</tr>
<tr>
    <td><CopyableCode code="schema_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the schema. (pattern: &lt;code&gt;arn:aws(-(cn|us-gov|iso(-&#91;bef&#93;)?))?:glue:.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="schema_definition" /></td>
    <td><code>string</code></td>
    <td>The schema definition for the schema ID. (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="schema_version_id" /></td>
    <td><code>string</code></td>
    <td>The SchemaVersionId of the schema version. (pattern: &lt;code&gt;&#91;a-f0-9&#93;&#123;8&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the schema version. (AVAILABLE, PENDING, FAILURE, DELETING)</td>
</tr>
<tr>
    <td><CopyableCode code="version_number" /></td>
    <td><code>integer (int64)</code></td>
    <td>The version number of the schema.</td>
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
    <td><a href="#list_schema_versions"><CopyableCode code="list_schema_versions" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns a list of schema versions that you have created, with minimal information. Schema versions in Deleted status will not be included in the results. Empty results will be returned if there are no schema versions available.</td>
</tr>
<tr>
    <td><a href="#get_schema_version"><CopyableCode code="get_schema_version" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Get the specified schema by its unique ID assigned when a version of the schema is created or registered. Schema versions in Deleted status will not be included in the results.</td>
</tr>
<tr>
    <td><a href="#register_schema_version"><CopyableCode code="register_schema_version" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-SchemaId"><code>SchemaId</code></a>, <a href="#parameter-SchemaDefinition"><code>SchemaDefinition</code></a></td>
    <td></td>
    <td>Adds a new version to the existing schema. Returns an error if new version of schema does not meet the compatibility requirements of the schema set. This API will not create a new schema set and will return a 404 error if the schema set is not already present in the Schema Registry. If this is the first schema definition to be registered in the Schema Registry, this API will store the schema version and return immediately. Otherwise, this call has the potential to run longer than other operations due to compatibility modes. You can call the GetSchemaVersion API with the SchemaVersionId to check compatibility modes. If the same schema definition is already stored in Schema Registry as a version, the schema ID of the existing schema is returned to the caller.</td>
</tr>
<tr>
    <td><a href="#remove_schema_version_metadata"><CopyableCode code="remove_schema_version_metadata" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-MetadataKeyValue"><code>MetadataKeyValue</code></a></td>
    <td></td>
    <td>Removes a key value pair from the schema version metadata for the specified schema version ID.</td>
</tr>
<tr>
    <td><a href="#put_schema_version_metadata"><CopyableCode code="put_schema_version_metadata" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-MetadataKeyValue"><code>MetadataKeyValue</code></a></td>
    <td></td>
    <td>Puts the metadata key value pair for a specified schema version ID. A maximum of 10 key value pairs will be allowed per schema version. They can be added over one or more calls.</td>
</tr>
<tr>
    <td><a href="#delete_schema_versions"><CopyableCode code="delete_schema_versions" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Remove versions from the specified schema. A version number or range may be supplied. If the compatibility mode forbids deleting of a version that is necessary, such as BACKWARDS_FULL, an error is returned. Calling the GetSchemaVersions API after this call will list the status of the deleted versions. When the range of version numbers contain check pointed version, the API will return a 409 conflict and will not proceed with the deletion. You have to remove the checkpoint first using the DeleteSchemaCheckpoint API before using this API. You cannot use the DeleteSchemaVersions API to delete the first schema version in the schema set. The first schema version can only be deleted by the DeleteSchema API. This operation will also delete the attached SchemaVersionMetadata under the schema versions. Hard deletes will be enforced on the database. If the compatibility mode forbids deleting of a version that is necessary, such as BACKWARDS_FULL, an error is returned.</td>
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
    defaultValue="list_schema_versions"
    values={[
        { label: 'list_schema_versions', value: 'list_schema_versions' },
        { label: 'get_schema_version', value: 'get_schema_version' }
    ]}
>
<TabItem value="list_schema_versions">

Returns a list of schema versions that you have created, with minimal information. Schema versions in Deleted status will not be included in the results. Empty results will be returned if there are no schema versions available.

```sql
SELECT
created_time,
schema_arn,
schema_version_id,
status,
version_number
FROM aws.glue.schema_versions
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="get_schema_version">

Get the specified schema by its unique ID assigned when a version of the schema is created or registered. Schema versions in Deleted status will not be included in the results.

```sql
SELECT
created_time,
data_format,
schema_arn,
schema_definition,
schema_version_id,
status,
version_number
FROM aws.glue.schema_versions
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="register_schema_version"
    values={[
        { label: 'register_schema_version', value: 'register_schema_version' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="register_schema_version">

Adds a new version to the existing schema. Returns an error if new version of schema does not meet the compatibility requirements of the schema set. This API will not create a new schema set and will return a 404 error if the schema set is not already present in the Schema Registry. If this is the first schema definition to be registered in the Schema Registry, this API will store the schema version and return immediately. Otherwise, this call has the potential to run longer than other operations due to compatibility modes. You can call the GetSchemaVersion API with the SchemaVersionId to check compatibility modes. If the same schema definition is already stored in Schema Registry as a version, the schema ID of the existing schema is returned to the caller.

```sql
INSERT INTO aws.glue.schema_versions (
SchemaId,
SchemaDefinition,
region
)
SELECT 
'{{ SchemaId }}' /* required */,
'{{ SchemaDefinition }}' /* required */,
'{{ region }}'
RETURNING
schema_version_id,
status,
version_number
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: schema_versions
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the schema_versions resource.
    - name: SchemaId
      description: |
        This is a wrapper structure to contain schema identity fields. The structure contains: SchemaId$SchemaArn: The Amazon Resource Name (ARN) of the schema. Either SchemaArn or SchemaName and RegistryName has to be provided. SchemaId$SchemaName: The name of the schema. Either SchemaArn or SchemaName and RegistryName has to be provided.
      value:
        SchemaArn: "{{ SchemaArn }}"
        SchemaName: "{{ SchemaName }}"
        RegistryName: "{{ RegistryName }}"
    - name: SchemaDefinition
      value: "{{ SchemaDefinition }}"
      description: |
        The schema definition using the DataFormat setting for the SchemaName.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="remove_schema_version_metadata"
    values={[
        { label: 'remove_schema_version_metadata', value: 'remove_schema_version_metadata' }
    ]}
>
<TabItem value="remove_schema_version_metadata">

Removes a key value pair from the schema version metadata for the specified schema version ID.

```sql
UPDATE aws.glue.schema_versions
SET 
SchemaId = '{{ SchemaId }}',
SchemaVersionNumber = '{{ SchemaVersionNumber }}',
SchemaVersionId = '{{ SchemaVersionId }}',
MetadataKeyValue = '{{ MetadataKeyValue }}'
WHERE 
region = '{{ region }}' --required
AND MetadataKeyValue = '{{ MetadataKeyValue }}' --required
RETURNING
latest_version,
metadata_key,
metadata_value,
registry_name,
schema_arn,
schema_name,
schema_version_id,
version_number;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="put_schema_version_metadata"
    values={[
        { label: 'put_schema_version_metadata', value: 'put_schema_version_metadata' }
    ]}
>
<TabItem value="put_schema_version_metadata">

Puts the metadata key value pair for a specified schema version ID. A maximum of 10 key value pairs will be allowed per schema version. They can be added over one or more calls.

```sql
REPLACE aws.glue.schema_versions
SET 
SchemaId = '{{ SchemaId }}',
SchemaVersionNumber = '{{ SchemaVersionNumber }}',
SchemaVersionId = '{{ SchemaVersionId }}',
MetadataKeyValue = '{{ MetadataKeyValue }}'
WHERE 
region = '{{ region }}' --required
AND MetadataKeyValue = '{{ MetadataKeyValue }}' --required
RETURNING
latest_version,
metadata_key,
metadata_value,
registry_name,
schema_arn,
schema_name,
schema_version_id,
version_number;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_schema_versions"
    values={[
        { label: 'delete_schema_versions', value: 'delete_schema_versions' }
    ]}
>
<TabItem value="delete_schema_versions">

Remove versions from the specified schema. A version number or range may be supplied. If the compatibility mode forbids deleting of a version that is necessary, such as BACKWARDS_FULL, an error is returned. Calling the GetSchemaVersions API after this call will list the status of the deleted versions. When the range of version numbers contain check pointed version, the API will return a 409 conflict and will not proceed with the deletion. You have to remove the checkpoint first using the DeleteSchemaCheckpoint API before using this API. You cannot use the DeleteSchemaVersions API to delete the first schema version in the schema set. The first schema version can only be deleted by the DeleteSchema API. This operation will also delete the attached SchemaVersionMetadata under the schema versions. Hard deletes will be enforced on the database. If the compatibility mode forbids deleting of a version that is necessary, such as BACKWARDS_FULL, an error is returned.

```sql
DELETE FROM aws.glue.schema_versions
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
