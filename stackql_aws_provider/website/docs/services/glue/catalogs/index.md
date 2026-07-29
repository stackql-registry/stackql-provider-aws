--- 
title: catalogs
hide_title: false
hide_table_of_contents: false
keywords:
  - catalogs
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

Creates, updates, deletes, gets or lists a <code>catalogs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="catalogs" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.glue.catalogs" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_catalog"
    values={[
        { label: 'get_catalog', value: 'get_catalog' },
        { label: 'get_catalogs', value: 'get_catalogs' }
    ]}
>
<TabItem value="get_catalog">

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
    <td><CopyableCode code="allow_full_table_external_data_access" /></td>
    <td><code>string</code></td>
    <td>Allows third-party engines to access data in Amazon S3 locations that are registered with Lake Formation. (True, False)</td>
</tr>
<tr>
    <td><CopyableCode code="catalog_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the catalog. To grant access to the default catalog, this field should not be provided. (pattern: &lt;code&gt;&#91;\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\t&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="catalog_properties" /></td>
    <td><code>object</code></td>
    <td>A CatalogProperties object that specifies data lake access properties and other custom properties.</td>
</tr>
<tr>
    <td><CopyableCode code="create_database_default_permissions" /></td>
    <td><code>array</code></td>
    <td>An array of PrincipalPermissions objects. Creates a set of default permissions on the database(s) for principals. Used by Amazon Web Services Lake Formation. Not used in the normal course of Glue operations.</td>
</tr>
<tr>
    <td><CopyableCode code="create_table_default_permissions" /></td>
    <td><code>array</code></td>
    <td>An array of PrincipalPermissions objects. Creates a set of default permissions on the table(s) for principals. Used by Amazon Web Services Lake Formation. Not used in the normal course of Glue operations.</td>
</tr>
<tr>
    <td><CopyableCode code="create_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time at which the catalog was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Description string, not more than 2048 bytes long, matching the URI address multi-line string pattern. A description of the catalog. (pattern: &lt;code&gt;&#91;\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\r\n\t&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="federated_catalog" /></td>
    <td><code>object</code></td>
    <td>A FederatedCatalog object that points to an entity outside the Glue Data Catalog.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the catalog. Cannot be the same as the account ID. (pattern: &lt;code&gt;^(?!(.*&#91;.\/\\&#93;|aws:)).*$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="parameters" /></td>
    <td><code>object</code></td>
    <td>A map array of key-value pairs that define parameters and properties of the catalog.</td>
</tr>
<tr>
    <td><CopyableCode code="resource_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) assigned to the catalog resource.</td>
</tr>
<tr>
    <td><CopyableCode code="target_redshift_catalog" /></td>
    <td><code>object</code></td>
    <td>A TargetRedshiftCatalog object that describes a target catalog for database resource linking.</td>
</tr>
<tr>
    <td><CopyableCode code="update_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time at which the catalog was last updated.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="get_catalogs">

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
    <td><CopyableCode code="catalog_list" /></td>
    <td><code>array</code></td>
    <td>An array of Catalog objects. A list of Catalog objects from the specified parent catalog.</td>
</tr>
<tr>
    <td><CopyableCode code="next_token" /></td>
    <td><code>string</code></td>
    <td>A continuation token for paginating the returned list of tokens, returned if the current segment of the list is not the last.</td>
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
    <td><a href="#get_catalog"><CopyableCode code="get_catalog" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>The name of the Catalog to retrieve. This should be all lowercase.</td>
</tr>
<tr>
    <td><a href="#get_catalogs"><CopyableCode code="get_catalogs" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves all catalogs defined in a catalog in the Glue Data Catalog. For a Redshift-federated catalog use case, this operation returns the list of catalogs mapped to Redshift databases in the Redshift namespace catalog.</td>
</tr>
<tr>
    <td><a href="#create_catalog"><CopyableCode code="create_catalog" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-Name"><code>Name</code></a>, <a href="#parameter-CatalogInput"><code>CatalogInput</code></a></td>
    <td></td>
    <td>Creates a new catalog in the Glue Data Catalog.</td>
</tr>
<tr>
    <td><a href="#update_catalog"><CopyableCode code="update_catalog" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-CatalogId"><code>CatalogId</code></a>, <a href="#parameter-CatalogInput"><code>CatalogInput</code></a></td>
    <td></td>
    <td>Updates an existing catalog's properties in the Glue Data Catalog.</td>
</tr>
<tr>
    <td><a href="#delete_catalog"><CopyableCode code="delete_catalog" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Removes the specified catalog from the Glue Data Catalog. After completing this operation, you no longer have access to the databases, tables (and all table versions and partitions that might belong to the tables) and the user-defined functions in the deleted catalog. Glue deletes these "orphaned" resources asynchronously in a timely manner, at the discretion of the service. To ensure the immediate deletion of all related resources before calling the DeleteCatalog operation, use DeleteTableVersion (or BatchDeleteTableVersion), DeletePartition (or BatchDeletePartition), DeleteTable (or BatchDeleteTable), DeleteUserDefinedFunction and DeleteDatabase to delete any resources that belong to the catalog.</td>
</tr>
<tr>
    <td><a href="#import_catalog_to_glue"><CopyableCode code="import_catalog_to_glue" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Imports an existing Amazon Athena Data Catalog to Glue.</td>
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
    defaultValue="get_catalog"
    values={[
        { label: 'get_catalog', value: 'get_catalog' },
        { label: 'get_catalogs', value: 'get_catalogs' }
    ]}
>
<TabItem value="get_catalog">

The name of the Catalog to retrieve. This should be all lowercase.

```sql
SELECT
allow_full_table_external_data_access,
catalog_id,
catalog_properties,
create_database_default_permissions,
create_table_default_permissions,
create_time,
description,
federated_catalog,
name,
parameters,
resource_arn,
target_redshift_catalog,
update_time
FROM aws.glue.catalogs
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="get_catalogs">

Retrieves all catalogs defined in a catalog in the Glue Data Catalog. For a Redshift-federated catalog use case, this operation returns the list of catalogs mapped to Redshift databases in the Redshift namespace catalog.

```sql
SELECT
catalog_list,
next_token
FROM aws.glue.catalogs
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_catalog"
    values={[
        { label: 'create_catalog', value: 'create_catalog' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_catalog">

Creates a new catalog in the Glue Data Catalog.

```sql
INSERT INTO aws.glue.catalogs (
Name,
CatalogInput,
Tags,
region
)
SELECT 
'{{ Name }}' /* required */,
'{{ CatalogInput }}' /* required */,
'{{ Tags }}',
'{{ region }}'
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: catalogs
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the catalogs resource.
    - name: Name
      value: "{{ Name }}"
      description: |
        The name of the catalog to create.
    - name: CatalogInput
      description: |
        A CatalogInput object that defines the metadata for the catalog.
      value:
        Description: "{{ Description }}"
        FederatedCatalog:
          Identifier: "{{ Identifier }}"
          ConnectionName: "{{ ConnectionName }}"
          ConnectionType: "{{ ConnectionType }}"
        Parameters: "{{ Parameters }}"
        TargetRedshiftCatalog:
          CatalogArn: "{{ CatalogArn }}"
        CatalogProperties:
          DataLakeAccessProperties:
            DataLakeAccess: {{ DataLakeAccess }}
            DataTransferRole: "{{ DataTransferRole }}"
            KmsKey: "{{ KmsKey }}"
            CatalogType: "{{ CatalogType }}"
          IcebergOptimizationProperties:
            RoleArn: "{{ RoleArn }}"
            Compaction: "{{ Compaction }}"
            Retention: "{{ Retention }}"
            OrphanFileDeletion: "{{ OrphanFileDeletion }}"
          CustomProperties: "{{ CustomProperties }}"
        CreateTableDefaultPermissions:
          - Principal:
              DataLakePrincipalIdentifier: "{{ DataLakePrincipalIdentifier }}"
            Permissions: "{{ Permissions }}"
        CreateDatabaseDefaultPermissions:
          - Principal:
              DataLakePrincipalIdentifier: "{{ DataLakePrincipalIdentifier }}"
            Permissions: "{{ Permissions }}"
        AllowFullTableExternalDataAccess: "{{ AllowFullTableExternalDataAccess }}"
        OverwriteChildResourcePermissionsWithDefault: "{{ OverwriteChildResourcePermissionsWithDefault }}"
    - name: Tags
      value: "{{ Tags }}"
      description: |
        A map array of key-value pairs, not more than 50 pairs. Each key is a UTF-8 string, not less than 1 or more than 128 bytes long. Each value is a UTF-8 string, not more than 256 bytes long. The tags you assign to the catalog.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_catalog"
    values={[
        { label: 'update_catalog', value: 'update_catalog' }
    ]}
>
<TabItem value="update_catalog">

Updates an existing catalog's properties in the Glue Data Catalog.

```sql
UPDATE aws.glue.catalogs
SET 
CatalogId = '{{ CatalogId }}',
CatalogInput = '{{ CatalogInput }}'
WHERE 
region = '{{ region }}' --required
AND CatalogId = '{{ CatalogId }}' --required
AND CatalogInput = '{{ CatalogInput }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_catalog"
    values={[
        { label: 'delete_catalog', value: 'delete_catalog' }
    ]}
>
<TabItem value="delete_catalog">

Removes the specified catalog from the Glue Data Catalog. After completing this operation, you no longer have access to the databases, tables (and all table versions and partitions that might belong to the tables) and the user-defined functions in the deleted catalog. Glue deletes these "orphaned" resources asynchronously in a timely manner, at the discretion of the service. To ensure the immediate deletion of all related resources before calling the DeleteCatalog operation, use DeleteTableVersion (or BatchDeleteTableVersion), DeletePartition (or BatchDeletePartition), DeleteTable (or BatchDeleteTable), DeleteUserDefinedFunction and DeleteDatabase to delete any resources that belong to the catalog.

```sql
DELETE FROM aws.glue.catalogs
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="import_catalog_to_glue"
    values={[
        { label: 'import_catalog_to_glue', value: 'import_catalog_to_glue' }
    ]}
>
<TabItem value="import_catalog_to_glue">

Imports an existing Amazon Athena Data Catalog to Glue.

```sql
EXEC aws.glue.catalogs.import_catalog_to_glue 
@region='{{ region }}' --required 
@@json=
'{
"CatalogId": "{{ CatalogId }}"
}'
;
```
</TabItem>
</Tabs>
