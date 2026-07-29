--- 
title: metadata_models
hide_title: false
hide_table_of_contents: false
keywords:
  - metadata_models
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

Creates, updates, deletes, gets or lists a <code>metadata_models</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="metadata_models" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.dms.metadata_models" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_metadata_model"
    values={[
        { label: 'describe_metadata_model', value: 'describe_metadata_model' }
    ]}
>
<TabItem value="describe_metadata_model">

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
    <td><code>string</code></td>
    <td>The SQL text of the metadata model. This field might not be populated for some metadata models.</td>
</tr>
<tr>
    <td><CopyableCode code="metadata_model_name" /></td>
    <td><code>string</code></td>
    <td>The name of the metadata model.</td>
</tr>
<tr>
    <td><CopyableCode code="metadata_model_type" /></td>
    <td><code>string</code></td>
    <td>The type of the metadata model.</td>
</tr>
<tr>
    <td><CopyableCode code="target_metadata_models" /></td>
    <td><code>array</code></td>
    <td>A list of counterpart metadata models in the target. This field is populated only when Origin is SOURCE and after the object has been converted by DMS Schema Conversion.</td>
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
    <td><a href="#describe_metadata_model"><CopyableCode code="describe_metadata_model" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets detailed information about the specified metadata model, including its definition and corresponding converted objects in the target database if applicable.</td>
</tr>
<tr>
    <td><a href="#cancel_metadata_model_conversion"><CopyableCode code="cancel_metadata_model_conversion" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-MigrationProjectIdentifier"><code>MigrationProjectIdentifier</code></a>, <a href="#parameter-RequestIdentifier"><code>RequestIdentifier</code></a></td>
    <td></td>
    <td>Cancels a single metadata model conversion operation that was started with StartMetadataModelConversion.</td>
</tr>
<tr>
    <td><a href="#cancel_metadata_model_creation"><CopyableCode code="cancel_metadata_model_creation" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-MigrationProjectIdentifier"><code>MigrationProjectIdentifier</code></a>, <a href="#parameter-RequestIdentifier"><code>RequestIdentifier</code></a></td>
    <td></td>
    <td>Cancels a single metadata model creation operation that was started with StartMetadataModelCreation.</td>
</tr>
<tr>
    <td><a href="#export_metadata_model_assessment"><CopyableCode code="export_metadata_model_assessment" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-MigrationProjectIdentifier"><code>MigrationProjectIdentifier</code></a>, <a href="#parameter-SelectionRules"><code>SelectionRules</code></a></td>
    <td></td>
    <td>Saves a copy of a database migration assessment report to your Amazon S3 bucket. DMS can save your assessment report as a comma-separated value (CSV) or a PDF file.</td>
</tr>
<tr>
    <td><a href="#start_metadata_model_assessment"><CopyableCode code="start_metadata_model_assessment" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-MigrationProjectIdentifier"><code>MigrationProjectIdentifier</code></a>, <a href="#parameter-SelectionRules"><code>SelectionRules</code></a></td>
    <td></td>
    <td>Creates a database migration assessment report by assessing the migration complexity for your source database. A database migration assessment report summarizes all of the schema conversion tasks. It also details the action items for database objects that can't be converted to the database engine of your target database instance.</td>
</tr>
<tr>
    <td><a href="#start_metadata_model_conversion"><CopyableCode code="start_metadata_model_conversion" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-MigrationProjectIdentifier"><code>MigrationProjectIdentifier</code></a>, <a href="#parameter-SelectionRules"><code>SelectionRules</code></a></td>
    <td></td>
    <td>Converts your source database objects to a format compatible with the target database.</td>
</tr>
<tr>
    <td><a href="#start_metadata_model_creation"><CopyableCode code="start_metadata_model_creation" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-MigrationProjectIdentifier"><code>MigrationProjectIdentifier</code></a>, <a href="#parameter-SelectionRules"><code>SelectionRules</code></a>, <a href="#parameter-MetadataModelName"><code>MetadataModelName</code></a>, <a href="#parameter-Properties"><code>Properties</code></a></td>
    <td></td>
    <td>Creates source metadata model of the given type with the specified properties for schema conversion operations. This action supports only these directions: from SQL Server to Aurora PostgreSQL, or from SQL Server to RDS for PostgreSQL.</td>
</tr>
<tr>
    <td><a href="#start_metadata_model_export_as_script"><CopyableCode code="start_metadata_model_export_as_script" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-MigrationProjectIdentifier"><code>MigrationProjectIdentifier</code></a>, <a href="#parameter-SelectionRules"><code>SelectionRules</code></a>, <a href="#parameter-Origin"><code>Origin</code></a></td>
    <td></td>
    <td>Saves your converted code to a file as a SQL script, and stores this file on your Amazon S3 bucket.</td>
</tr>
<tr>
    <td><a href="#start_metadata_model_export_to_target"><CopyableCode code="start_metadata_model_export_to_target" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-MigrationProjectIdentifier"><code>MigrationProjectIdentifier</code></a>, <a href="#parameter-SelectionRules"><code>SelectionRules</code></a></td>
    <td></td>
    <td>Applies converted database objects to your target database.</td>
</tr>
<tr>
    <td><a href="#start_metadata_model_import"><CopyableCode code="start_metadata_model_import" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-MigrationProjectIdentifier"><code>MigrationProjectIdentifier</code></a>, <a href="#parameter-SelectionRules"><code>SelectionRules</code></a>, <a href="#parameter-Origin"><code>Origin</code></a></td>
    <td></td>
    <td>Loads the metadata for all the dependent database objects of the parent object. This operation uses your project's Amazon S3 bucket as a metadata cache to improve performance.</td>
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
    defaultValue="describe_metadata_model"
    values={[
        { label: 'describe_metadata_model', value: 'describe_metadata_model' }
    ]}
>
<TabItem value="describe_metadata_model">

Gets detailed information about the specified metadata model, including its definition and corresponding converted objects in the target database if applicable.

```sql
SELECT
definition,
metadata_model_name,
metadata_model_type,
target_metadata_models
FROM aws.dms.metadata_models
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="cancel_metadata_model_conversion"
    values={[
        { label: 'cancel_metadata_model_conversion', value: 'cancel_metadata_model_conversion' },
        { label: 'cancel_metadata_model_creation', value: 'cancel_metadata_model_creation' },
        { label: 'export_metadata_model_assessment', value: 'export_metadata_model_assessment' },
        { label: 'start_metadata_model_assessment', value: 'start_metadata_model_assessment' },
        { label: 'start_metadata_model_conversion', value: 'start_metadata_model_conversion' },
        { label: 'start_metadata_model_creation', value: 'start_metadata_model_creation' },
        { label: 'start_metadata_model_export_as_script', value: 'start_metadata_model_export_as_script' },
        { label: 'start_metadata_model_export_to_target', value: 'start_metadata_model_export_to_target' },
        { label: 'start_metadata_model_import', value: 'start_metadata_model_import' }
    ]}
>
<TabItem value="cancel_metadata_model_conversion">

Cancels a single metadata model conversion operation that was started with StartMetadataModelConversion.

```sql
EXEC aws.dms.metadata_models.cancel_metadata_model_conversion 
@region='{{ region }}' --required 
@@json=
'{
"MigrationProjectIdentifier": "{{ MigrationProjectIdentifier }}", 
"RequestIdentifier": "{{ RequestIdentifier }}"
}'
;
```
</TabItem>
<TabItem value="cancel_metadata_model_creation">

Cancels a single metadata model creation operation that was started with StartMetadataModelCreation.

```sql
EXEC aws.dms.metadata_models.cancel_metadata_model_creation 
@region='{{ region }}' --required 
@@json=
'{
"MigrationProjectIdentifier": "{{ MigrationProjectIdentifier }}", 
"RequestIdentifier": "{{ RequestIdentifier }}"
}'
;
```
</TabItem>
<TabItem value="export_metadata_model_assessment">

Saves a copy of a database migration assessment report to your Amazon S3 bucket. DMS can save your assessment report as a comma-separated value (CSV) or a PDF file.

```sql
EXEC aws.dms.metadata_models.export_metadata_model_assessment 
@region='{{ region }}' --required 
@@json=
'{
"MigrationProjectIdentifier": "{{ MigrationProjectIdentifier }}", 
"SelectionRules": "{{ SelectionRules }}", 
"FileName": "{{ FileName }}", 
"AssessmentReportTypes": "{{ AssessmentReportTypes }}"
}'
;
```
</TabItem>
<TabItem value="start_metadata_model_assessment">

Creates a database migration assessment report by assessing the migration complexity for your source database. A database migration assessment report summarizes all of the schema conversion tasks. It also details the action items for database objects that can't be converted to the database engine of your target database instance.

```sql
EXEC aws.dms.metadata_models.start_metadata_model_assessment 
@region='{{ region }}' --required 
@@json=
'{
"MigrationProjectIdentifier": "{{ MigrationProjectIdentifier }}", 
"SelectionRules": "{{ SelectionRules }}"
}'
;
```
</TabItem>
<TabItem value="start_metadata_model_conversion">

Converts your source database objects to a format compatible with the target database.

```sql
EXEC aws.dms.metadata_models.start_metadata_model_conversion 
@region='{{ region }}' --required 
@@json=
'{
"MigrationProjectIdentifier": "{{ MigrationProjectIdentifier }}", 
"SelectionRules": "{{ SelectionRules }}"
}'
;
```
</TabItem>
<TabItem value="start_metadata_model_creation">

Creates source metadata model of the given type with the specified properties for schema conversion operations. This action supports only these directions: from SQL Server to Aurora PostgreSQL, or from SQL Server to RDS for PostgreSQL.

```sql
EXEC aws.dms.metadata_models.start_metadata_model_creation 
@region='{{ region }}' --required 
@@json=
'{
"MigrationProjectIdentifier": "{{ MigrationProjectIdentifier }}", 
"SelectionRules": "{{ SelectionRules }}", 
"MetadataModelName": "{{ MetadataModelName }}", 
"Properties": "{{ Properties }}"
}'
;
```
</TabItem>
<TabItem value="start_metadata_model_export_as_script">

Saves your converted code to a file as a SQL script, and stores this file on your Amazon S3 bucket.

```sql
EXEC aws.dms.metadata_models.start_metadata_model_export_as_script 
@region='{{ region }}' --required 
@@json=
'{
"MigrationProjectIdentifier": "{{ MigrationProjectIdentifier }}", 
"SelectionRules": "{{ SelectionRules }}", 
"Origin": "{{ Origin }}", 
"FileName": "{{ FileName }}"
}'
;
```
</TabItem>
<TabItem value="start_metadata_model_export_to_target">

Applies converted database objects to your target database.

```sql
EXEC aws.dms.metadata_models.start_metadata_model_export_to_target 
@region='{{ region }}' --required 
@@json=
'{
"MigrationProjectIdentifier": "{{ MigrationProjectIdentifier }}", 
"SelectionRules": "{{ SelectionRules }}", 
"OverwriteExtensionPack": {{ OverwriteExtensionPack }}
}'
;
```
</TabItem>
<TabItem value="start_metadata_model_import">

Loads the metadata for all the dependent database objects of the parent object. This operation uses your project's Amazon S3 bucket as a metadata cache to improve performance.

```sql
EXEC aws.dms.metadata_models.start_metadata_model_import 
@region='{{ region }}' --required 
@@json=
'{
"MigrationProjectIdentifier": "{{ MigrationProjectIdentifier }}", 
"SelectionRules": "{{ SelectionRules }}", 
"Origin": "{{ Origin }}", 
"Refresh": {{ Refresh }}
}'
;
```
</TabItem>
</Tabs>
