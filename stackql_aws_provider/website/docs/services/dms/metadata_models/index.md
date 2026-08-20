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
    <td>Gets detailed information about the specified metadata model, including its definition and corresponding converted objects in the target database if applicable. Required permissions: dms:DescribeMetadataModel. For more information, see Actions, resources, and condition keys for Database Migration Service.</td>
</tr>
<tr>
    <td><a href="#cancel_metadata_model_conversion"><CopyableCode code="cancel_metadata_model_conversion" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-MigrationProjectIdentifier"><code>MigrationProjectIdentifier</code></a>, <a href="#parameter-RequestIdentifier"><code>RequestIdentifier</code></a></td>
    <td></td>
    <td>Cancels a single metadata model conversion operation that was started with StartMetadataModelConversion. Required permissions: dms:CancelMetadataModelConversion. For more information, see Actions, resources, and condition keys for Database Migration Service.</td>
</tr>
<tr>
    <td><a href="#cancel_metadata_model_creation"><CopyableCode code="cancel_metadata_model_creation" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-MigrationProjectIdentifier"><code>MigrationProjectIdentifier</code></a>, <a href="#parameter-RequestIdentifier"><code>RequestIdentifier</code></a></td>
    <td></td>
    <td>Cancels a single metadata model creation operation that was started with StartMetadataModelCreation. Required permissions: dms:CancelMetadataModelCreation. For more information, see Actions, resources, and condition keys for Database Migration Service.</td>
</tr>
<tr>
    <td><a href="#export_metadata_model_assessment"><CopyableCode code="export_metadata_model_assessment" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-MigrationProjectIdentifier"><code>MigrationProjectIdentifier</code></a>, <a href="#parameter-SelectionRules"><code>SelectionRules</code></a></td>
    <td></td>
    <td>Saves a copy of a database migration assessment report to your Amazon S3 bucket. DMS can save your assessment report as a comma-separated value (CSV) or a PDF file. Required permissions: dms:ExportMetadataModelAssessment. For more information, see Actions, resources, and condition keys for Database Migration Service.</td>
</tr>
<tr>
    <td><a href="#start_metadata_model_assessment"><CopyableCode code="start_metadata_model_assessment" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-MigrationProjectIdentifier"><code>MigrationProjectIdentifier</code></a>, <a href="#parameter-SelectionRules"><code>SelectionRules</code></a></td>
    <td></td>
    <td>Queues an assessment of the selected source metadata models (database objects such as tables, views, and procedures) to evaluate conversion complexity to the target database format. If other requests created by Start* operations are already in the migration project's queue, the assessment begins after they complete. The assessment request loads metadata models that are not yet in the metadata tree, but does not reload metadata models that are already present. If your source database has changed since the metadata was loaded, refresh the affected metadata models with StartMetadataModelImport before calling this operation. To check the status of the assessment request, call DescribeMetadataModelAssessments using the returned RequestIdentifier as a filter. To export the conversion assessment report after the request completes successfully, call ExportMetadataModelAssessment. Required permissions: dms:StartMetadataModelAssessment. For more information, see Actions, resources, and condition keys for Database Migration Service.</td>
</tr>
<tr>
    <td><a href="#start_metadata_model_conversion"><CopyableCode code="start_metadata_model_conversion" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-MigrationProjectIdentifier"><code>MigrationProjectIdentifier</code></a>, <a href="#parameter-SelectionRules"><code>SelectionRules</code></a></td>
    <td></td>
    <td>Queues a conversion of the selected source metadata models (database objects such as tables, views, and procedures) to the target database format. If other requests created by Start* operations are already in the migration project's queue, the conversion begins after they complete. The conversion request loads metadata models that are not yet in the metadata tree, but does not reload metadata models that are already present. If your source database has changed since the metadata was loaded, refresh the affected metadata models with StartMetadataModelImport before calling this operation. If converted objects already exist in the target metadata tree, the conversion overwrites them, including any manual edits. To check the status of the conversion request, call DescribeMetadataModelConversions using the returned RequestIdentifier as a filter. To cancel a queued or in-progress request, call CancelMetadataModelConversion with the returned RequestIdentifier. After the conversion completes successfully: To export a post-conversion assessment report, call ExportMetadataModelAssessment. To retrieve converted code, use any of the following options: DescribeMetadataModel and DescribeMetadataModelChildren – navigate the target metadata tree and retrieve converted definitions. StartMetadataModelExportAsScript – export as data definition language (DDL) scripts to your Amazon S3 bucket. StartMetadataModelExportToTarget – apply directly to your target database. Required permissions: dms:StartMetadataModelConversion. For more information, see Actions, resources, and condition keys for Database Migration Service.</td>
</tr>
<tr>
    <td><a href="#start_metadata_model_creation"><CopyableCode code="start_metadata_model_creation" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-MigrationProjectIdentifier"><code>MigrationProjectIdentifier</code></a>, <a href="#parameter-SelectionRules"><code>SelectionRules</code></a>, <a href="#parameter-MetadataModelName"><code>MetadataModelName</code></a>, <a href="#parameter-Properties"><code>Properties</code></a></td>
    <td></td>
    <td>Queues the creation of a metadata model in the source metadata tree. If other requests created by Start* operations are already in the migration project's queue, the creation begins after they complete. This operation supports only Microsoft SQL Server to Aurora PostgreSQL and Microsoft SQL Server to Amazon RDS for PostgreSQL conversion paths. To check the status of the creation request, call DescribeMetadataModelCreations using the returned RequestIdentifier as a filter. To cancel a queued or in-progress request, call CancelMetadataModelCreation with the returned RequestIdentifier. Calling StartMetadataModelImport with Refresh deletes metadata models created by this operation. After the creation completes successfully: To evaluate conversion complexity, call StartMetadataModelAssessment. To convert to the target database format, call StartMetadataModelConversion. Required permissions: dms:StartMetadataModelCreation. For more information, see Actions, resources, and condition keys for Database Migration Service.</td>
</tr>
<tr>
    <td><a href="#start_metadata_model_export_as_script"><CopyableCode code="start_metadata_model_export_as_script" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-MigrationProjectIdentifier"><code>MigrationProjectIdentifier</code></a>, <a href="#parameter-SelectionRules"><code>SelectionRules</code></a>, <a href="#parameter-Origin"><code>Origin</code></a></td>
    <td></td>
    <td>Queues an export of metadata models (database objects such as tables, views, and procedures) as a data definition language (DDL) script. The script is stored as a ZIP archive in the Amazon S3 bucket associated with the migration project. If other requests created by Start* operations are already in the migration project's queue, the export begins after they complete. When exporting from the target metadata tree, the export applies only to metadata models created by conversion. Metadata models imported from the database are skipped. To check the status of the export request, call DescribeMetadataModelExportsAsScript using the returned RequestIdentifier as a filter. Required permissions: dms:StartMetadataModelExportAsScripts. For more information, see Actions, resources, and condition keys for Database Migration Service.</td>
</tr>
<tr>
    <td><a href="#start_metadata_model_export_to_target"><CopyableCode code="start_metadata_model_export_to_target" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-MigrationProjectIdentifier"><code>MigrationProjectIdentifier</code></a>, <a href="#parameter-SelectionRules"><code>SelectionRules</code></a></td>
    <td></td>
    <td>Queues an export of the selected converted metadata models (database objects such as tables, views, and procedures) to your target database. If other requests created by Start* operations are already in the migration project's queue, the export begins after they complete. This operation requires a non-virtual target data provider. The export applies only metadata models created by conversion. Metadata models imported from the database are skipped. If objects with the same name already exist on the target database, the export overwrites them. The operation installs the extension pack on the target database. For more information, see Using extension packs in DMS Schema Conversion. To check the status of the export request, call DescribeMetadataModelExportsToTarget using the returned RequestIdentifier as a filter. Required permissions: dms:StartMetadataModelExportToTarget. For more information, see Actions, resources, and condition keys for Database Migration Service.</td>
</tr>
<tr>
    <td><a href="#start_metadata_model_import"><CopyableCode code="start_metadata_model_import" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-MigrationProjectIdentifier"><code>MigrationProjectIdentifier</code></a>, <a href="#parameter-SelectionRules"><code>SelectionRules</code></a>, <a href="#parameter-Origin"><code>Origin</code></a></td>
    <td></td>
    <td>Queues an import of metadata models (database objects such as tables, views, and procedures) from your data provider into the metadata tree. If other requests created by Start* operations are already in the migration project's queue, the import begins after they complete. To check the status of the import request, call DescribeMetadataModelImports using the returned RequestIdentifier as a filter. Required permissions: dms:StartMetadataModelImport. For more information, see Actions, resources, and condition keys for Database Migration Service.</td>
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

Gets detailed information about the specified metadata model, including its definition and corresponding converted objects in the target database if applicable. Required permissions: dms:DescribeMetadataModel. For more information, see Actions, resources, and condition keys for Database Migration Service.

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

Cancels a single metadata model conversion operation that was started with StartMetadataModelConversion. Required permissions: dms:CancelMetadataModelConversion. For more information, see Actions, resources, and condition keys for Database Migration Service.

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

Cancels a single metadata model creation operation that was started with StartMetadataModelCreation. Required permissions: dms:CancelMetadataModelCreation. For more information, see Actions, resources, and condition keys for Database Migration Service.

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

Saves a copy of a database migration assessment report to your Amazon S3 bucket. DMS can save your assessment report as a comma-separated value (CSV) or a PDF file. Required permissions: dms:ExportMetadataModelAssessment. For more information, see Actions, resources, and condition keys for Database Migration Service.

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

Queues an assessment of the selected source metadata models (database objects such as tables, views, and procedures) to evaluate conversion complexity to the target database format. If other requests created by Start* operations are already in the migration project's queue, the assessment begins after they complete. The assessment request loads metadata models that are not yet in the metadata tree, but does not reload metadata models that are already present. If your source database has changed since the metadata was loaded, refresh the affected metadata models with StartMetadataModelImport before calling this operation. To check the status of the assessment request, call DescribeMetadataModelAssessments using the returned RequestIdentifier as a filter. To export the conversion assessment report after the request completes successfully, call ExportMetadataModelAssessment. Required permissions: dms:StartMetadataModelAssessment. For more information, see Actions, resources, and condition keys for Database Migration Service.

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

Queues a conversion of the selected source metadata models (database objects such as tables, views, and procedures) to the target database format. If other requests created by Start* operations are already in the migration project's queue, the conversion begins after they complete. The conversion request loads metadata models that are not yet in the metadata tree, but does not reload metadata models that are already present. If your source database has changed since the metadata was loaded, refresh the affected metadata models with StartMetadataModelImport before calling this operation. If converted objects already exist in the target metadata tree, the conversion overwrites them, including any manual edits. To check the status of the conversion request, call DescribeMetadataModelConversions using the returned RequestIdentifier as a filter. To cancel a queued or in-progress request, call CancelMetadataModelConversion with the returned RequestIdentifier. After the conversion completes successfully: To export a post-conversion assessment report, call ExportMetadataModelAssessment. To retrieve converted code, use any of the following options: DescribeMetadataModel and DescribeMetadataModelChildren – navigate the target metadata tree and retrieve converted definitions. StartMetadataModelExportAsScript – export as data definition language (DDL) scripts to your Amazon S3 bucket. StartMetadataModelExportToTarget – apply directly to your target database. Required permissions: dms:StartMetadataModelConversion. For more information, see Actions, resources, and condition keys for Database Migration Service.

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

Queues the creation of a metadata model in the source metadata tree. If other requests created by Start* operations are already in the migration project's queue, the creation begins after they complete. This operation supports only Microsoft SQL Server to Aurora PostgreSQL and Microsoft SQL Server to Amazon RDS for PostgreSQL conversion paths. To check the status of the creation request, call DescribeMetadataModelCreations using the returned RequestIdentifier as a filter. To cancel a queued or in-progress request, call CancelMetadataModelCreation with the returned RequestIdentifier. Calling StartMetadataModelImport with Refresh deletes metadata models created by this operation. After the creation completes successfully: To evaluate conversion complexity, call StartMetadataModelAssessment. To convert to the target database format, call StartMetadataModelConversion. Required permissions: dms:StartMetadataModelCreation. For more information, see Actions, resources, and condition keys for Database Migration Service.

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

Queues an export of metadata models (database objects such as tables, views, and procedures) as a data definition language (DDL) script. The script is stored as a ZIP archive in the Amazon S3 bucket associated with the migration project. If other requests created by Start* operations are already in the migration project's queue, the export begins after they complete. When exporting from the target metadata tree, the export applies only to metadata models created by conversion. Metadata models imported from the database are skipped. To check the status of the export request, call DescribeMetadataModelExportsAsScript using the returned RequestIdentifier as a filter. Required permissions: dms:StartMetadataModelExportAsScripts. For more information, see Actions, resources, and condition keys for Database Migration Service.

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

Queues an export of the selected converted metadata models (database objects such as tables, views, and procedures) to your target database. If other requests created by Start* operations are already in the migration project's queue, the export begins after they complete. This operation requires a non-virtual target data provider. The export applies only metadata models created by conversion. Metadata models imported from the database are skipped. If objects with the same name already exist on the target database, the export overwrites them. The operation installs the extension pack on the target database. For more information, see Using extension packs in DMS Schema Conversion. To check the status of the export request, call DescribeMetadataModelExportsToTarget using the returned RequestIdentifier as a filter. Required permissions: dms:StartMetadataModelExportToTarget. For more information, see Actions, resources, and condition keys for Database Migration Service.

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

Queues an import of metadata models (database objects such as tables, views, and procedures) from your data provider into the metadata tree. If other requests created by Start* operations are already in the migration project's queue, the import begins after they complete. To check the status of the import request, call DescribeMetadataModelImports using the returned RequestIdentifier as a filter. Required permissions: dms:StartMetadataModelImport. For more information, see Actions, resources, and condition keys for Database Migration Service.

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
