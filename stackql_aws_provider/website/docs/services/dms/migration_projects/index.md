--- 
title: migration_projects
hide_title: false
hide_table_of_contents: false
keywords:
  - migration_projects
  - dms
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

Creates, updates, deletes, gets or lists a <code>migration_projects</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="migration_projects" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.dms.migration_projects" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_migration_projects"
    values={[
        { label: 'describe_migration_projects', value: 'describe_migration_projects' }
    ]}
>
<TabItem value="describe_migration_projects">

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
    <td><CopyableCode code="marker" /></td>
    <td><code>string</code></td>
    <td>Specifies the unique pagination token that makes it possible to display the next page of results. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords. If Marker is returned by a previous response, there are more results available. The value of Marker is a unique pagination token for each page. To retrieve the next page, make the call again using the returned token and keeping all other arguments unchanged.</td>
</tr>
<tr>
    <td><CopyableCode code="migration_projects" /></td>
    <td><code>array</code></td>
    <td>A description of migration projects.</td>
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
    <td><a href="#describe_migration_projects"><CopyableCode code="describe_migration_projects" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns a paginated list of migration projects for your account in the current region. Required permissions: dms:ListMigrationProjects. For more information, see Actions, resources, and condition keys for Database Migration Service.</td>
</tr>
<tr>
    <td><a href="#create_migration_project"><CopyableCode code="create_migration_project" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-SourceDataProviderDescriptors"><code>SourceDataProviderDescriptors</code></a>, <a href="#parameter-TargetDataProviderDescriptors"><code>TargetDataProviderDescriptors</code></a>, <a href="#parameter-InstanceProfileIdentifier"><code>InstanceProfileIdentifier</code></a></td>
    <td></td>
    <td>Creates the migration project using the specified parameters. You can run this action only after you create an instance profile and data providers using CreateInstanceProfile and CreateDataProvider. Required permissions: dms:CreateMigrationProject. For more information, see Actions, resources, and condition keys for Database Migration Service.</td>
</tr>
<tr>
    <td><a href="#modify_migration_project"><CopyableCode code="modify_migration_project" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-MigrationProjectIdentifier"><code>MigrationProjectIdentifier</code></a></td>
    <td></td>
    <td>Modifies the specified migration project using the provided parameters. Required permissions: dms:UpdateMigrationProject. For more information, see Actions, resources, and condition keys for Database Migration Service. The migration project must be closed before you can modify it.</td>
</tr>
<tr>
    <td><a href="#delete_migration_project"><CopyableCode code="delete_migration_project" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the specified migration project. Required permissions: dms:DeleteMigrationProject. For more information, see Actions, resources, and condition keys for Database Migration Service. The migration project must be closed before you can delete it.</td>
</tr>
<tr>
    <td><a href="#start_extension_pack_association"><CopyableCode code="start_extension_pack_association" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-MigrationProjectIdentifier"><code>MigrationProjectIdentifier</code></a></td>
    <td></td>
    <td>Queues the installation of the extension pack on your target database. If other requests created by Start* operations are already in the migration project's queue, the installation begins after they complete. This operation requires a non-virtual target data provider. If the extension pack already exists, the operation reinstalls it. To ensure compatibility, reconvert your database objects if the version has changed since your last conversion. For more information, see Using extension packs in DMS Schema Conversion. To check the status of the request, call DescribeExtensionPackAssociations using the returned RequestIdentifier as a filter. Required permissions: dms:AssociateExtensionPack. For more information, see Actions, resources, and condition keys for Database Migration Service.</td>
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
    defaultValue="describe_migration_projects"
    values={[
        { label: 'describe_migration_projects', value: 'describe_migration_projects' }
    ]}
>
<TabItem value="describe_migration_projects">

Returns a paginated list of migration projects for your account in the current region. Required permissions: dms:ListMigrationProjects. For more information, see Actions, resources, and condition keys for Database Migration Service.

```sql
SELECT
marker,
migration_projects
FROM aws.dms.migration_projects
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_migration_project"
    values={[
        { label: 'create_migration_project', value: 'create_migration_project' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_migration_project">

Creates the migration project using the specified parameters. You can run this action only after you create an instance profile and data providers using CreateInstanceProfile and CreateDataProvider. Required permissions: dms:CreateMigrationProject. For more information, see Actions, resources, and condition keys for Database Migration Service.

```sql
INSERT INTO aws.dms.migration_projects (
MigrationProjectName,
SourceDataProviderDescriptors,
TargetDataProviderDescriptors,
InstanceProfileIdentifier,
TransformationRules,
Description,
Tags,
SchemaConversionApplicationAttributes,
region
)
SELECT 
'{{ MigrationProjectName }}',
'{{ SourceDataProviderDescriptors }}' /* required */,
'{{ TargetDataProviderDescriptors }}' /* required */,
'{{ InstanceProfileIdentifier }}' /* required */,
'{{ TransformationRules }}',
'{{ Description }}',
'{{ Tags }}',
'{{ SchemaConversionApplicationAttributes }}',
'{{ region }}'
RETURNING
migration_project
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: migration_projects
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the migration_projects resource.
    - name: MigrationProjectName
      value: "{{ MigrationProjectName }}"
      description: |
        A user-friendly name for the migration project.
    - name: SourceDataProviderDescriptors
      description: |
        Information about the source data provider, including the name, ARN, and Secrets Manager parameters.
      value:
        - DataProviderIdentifier: "{{ DataProviderIdentifier }}"
          SecretsManagerSecretId: "{{ SecretsManagerSecretId }}"
          SecretsManagerAccessRoleArn: "{{ SecretsManagerAccessRoleArn }}"
    - name: TargetDataProviderDescriptors
      description: |
        Information about the target data provider, including the name, ARN, and Amazon Web Services Secrets Manager parameters.
      value:
        - DataProviderIdentifier: "{{ DataProviderIdentifier }}"
          SecretsManagerSecretId: "{{ SecretsManagerSecretId }}"
          SecretsManagerAccessRoleArn: "{{ SecretsManagerAccessRoleArn }}"
    - name: InstanceProfileIdentifier
      value: "{{ InstanceProfileIdentifier }}"
      description: |
        The identifier of the associated instance profile. Identifiers must begin with a letter and must contain only ASCII letters, digits, and hyphens. They can't end with a hyphen, or contain two consecutive hyphens.
    - name: TransformationRules
      value: "{{ TransformationRules }}"
      description: |
        A JSON string that specifies the transformation rules for the migration project. Transformation rules let you customize how DMS Schema Conversion converts your source database objects, including renaming, adding prefixes or suffixes, and changing data types. For the transformation rule format and examples, see Transformation rules in DMS Schema Conversion. Homogeneous data migrations do not support transformation rules.
    - name: Description
      value: "{{ Description }}"
      description: |
        A user-friendly description of the migration project.
    - name: Tags
      description: |
        One or more tags to be assigned to the migration project.
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
          ResourceArn: "{{ ResourceArn }}"
    - name: SchemaConversionApplicationAttributes
      description: |
        The schema conversion application attributes, including the Amazon S3 bucket name and Amazon S3 role ARN.
      value:
        S3BucketPath: "{{ S3BucketPath }}"
        S3BucketRoleArn: "{{ S3BucketRoleArn }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="modify_migration_project"
    values={[
        { label: 'modify_migration_project', value: 'modify_migration_project' }
    ]}
>
<TabItem value="modify_migration_project">

Modifies the specified migration project using the provided parameters. Required permissions: dms:UpdateMigrationProject. For more information, see Actions, resources, and condition keys for Database Migration Service. The migration project must be closed before you can modify it.

```sql
UPDATE aws.dms.migration_projects
SET 
MigrationProjectIdentifier = '{{ MigrationProjectIdentifier }}',
MigrationProjectName = '{{ MigrationProjectName }}',
SourceDataProviderDescriptors = '{{ SourceDataProviderDescriptors }}',
TargetDataProviderDescriptors = '{{ TargetDataProviderDescriptors }}',
InstanceProfileIdentifier = '{{ InstanceProfileIdentifier }}',
TransformationRules = '{{ TransformationRules }}',
Description = '{{ Description }}',
SchemaConversionApplicationAttributes = '{{ SchemaConversionApplicationAttributes }}'
WHERE 
region = '{{ region }}' --required
AND MigrationProjectIdentifier = '{{ MigrationProjectIdentifier }}' --required
RETURNING
migration_project;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_migration_project"
    values={[
        { label: 'delete_migration_project', value: 'delete_migration_project' }
    ]}
>
<TabItem value="delete_migration_project">

Deletes the specified migration project. Required permissions: dms:DeleteMigrationProject. For more information, see Actions, resources, and condition keys for Database Migration Service. The migration project must be closed before you can delete it.

```sql
DELETE FROM aws.dms.migration_projects
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="start_extension_pack_association"
    values={[
        { label: 'start_extension_pack_association', value: 'start_extension_pack_association' }
    ]}
>
<TabItem value="start_extension_pack_association">

Queues the installation of the extension pack on your target database. If other requests created by Start* operations are already in the migration project's queue, the installation begins after they complete. This operation requires a non-virtual target data provider. If the extension pack already exists, the operation reinstalls it. To ensure compatibility, reconvert your database objects if the version has changed since your last conversion. For more information, see Using extension packs in DMS Schema Conversion. To check the status of the request, call DescribeExtensionPackAssociations using the returned RequestIdentifier as a filter. Required permissions: dms:AssociateExtensionPack. For more information, see Actions, resources, and condition keys for Database Migration Service.

```sql
EXEC aws.dms.migration_projects.start_extension_pack_association 
@region='{{ region }}' --required 
@@json=
'{
"MigrationProjectIdentifier": "{{ MigrationProjectIdentifier }}"
}'
;
```
</TabItem>
</Tabs>
