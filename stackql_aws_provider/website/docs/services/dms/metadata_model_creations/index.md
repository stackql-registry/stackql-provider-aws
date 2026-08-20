--- 
title: metadata_model_creations
hide_title: false
hide_table_of_contents: false
keywords:
  - metadata_model_creations
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

Creates, updates, deletes, gets or lists a <code>metadata_model_creations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="metadata_model_creations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.dms.metadata_model_creations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_metadata_model_creations"
    values={[
        { label: 'describe_metadata_model_creations', value: 'describe_metadata_model_creations' }
    ]}
>
<TabItem value="describe_metadata_model_creations">

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
    <td><CopyableCode code="error" /></td>
    <td><code>object</code></td>
    <td>Provides error information about a project.</td>
</tr>
<tr>
    <td><CopyableCode code="export_sql_details" /></td>
    <td><code>object</code></td>
    <td>The Amazon S3 location of the ZIP archive that contains the exported data definition language (DDL) scripts. DMS populates this field only for the DescribeMetadataModelExportsAsScript operation.</td>
</tr>
<tr>
    <td><CopyableCode code="migration_project_arn" /></td>
    <td><code>string</code></td>
    <td>The migration project ARN.</td>
</tr>
<tr>
    <td><CopyableCode code="progress" /></td>
    <td><code>object</code></td>
    <td>Provides information about the progress of the schema conversion operation.</td>
</tr>
<tr>
    <td><CopyableCode code="request_identifier" /></td>
    <td><code>string</code></td>
    <td>The identifier for the schema conversion action.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The schema conversion operation status. Possible values: RECEIVED – The operation is received but not yet queued for processing. IN_PROGRESS – The operation is queued or actively running. SUCCESS – The operation completed successfully. FAILED – The operation did not complete. CANCELING – The operation is being canceled. The operation might still succeed or fail before cancellation takes effect. CANCELED – The operation was canceled before completion.</td>
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
    <td><a href="#describe_metadata_model_creations"><CopyableCode code="describe_metadata_model_creations" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns a paginated list of metadata model creation requests for a migration project, initiated by StartMetadataModelCreation. To cancel a queued or in-progress request, call CancelMetadataModelCreation. Required permissions: dms:DescribeMetadataModelCreations. For more information, see Actions, resources, and condition keys for Database Migration Service.</td>
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
    defaultValue="describe_metadata_model_creations"
    values={[
        { label: 'describe_metadata_model_creations', value: 'describe_metadata_model_creations' }
    ]}
>
<TabItem value="describe_metadata_model_creations">

Returns a paginated list of metadata model creation requests for a migration project, initiated by StartMetadataModelCreation. To cancel a queued or in-progress request, call CancelMetadataModelCreation. Required permissions: dms:DescribeMetadataModelCreations. For more information, see Actions, resources, and condition keys for Database Migration Service.

```sql
SELECT
error,
export_sql_details,
migration_project_arn,
progress,
request_identifier,
status
FROM aws.dms.metadata_model_creations
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
