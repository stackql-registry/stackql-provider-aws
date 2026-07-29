--- 
title: explainability_exports
hide_title: false
hide_table_of_contents: false
keywords:
  - explainability_exports
  - forecast
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

Creates, updates, deletes, gets or lists an <code>explainability_exports</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="explainability_exports" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.forecast.explainability_exports" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_explainability_export"
    values={[
        { label: 'describe_explainability_export', value: 'describe_explainability_export' },
        { label: 'list_explainability_exports', value: 'list_explainability_exports' }
    ]}
>
<TabItem value="describe_explainability_export">

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
    <td><CopyableCode code="creation_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>When the Explainability export was created.</td>
</tr>
<tr>
    <td><CopyableCode code="destination" /></td>
    <td><code>object</code></td>
    <td>The destination for an export job. Provide an S3 path, an Identity and Access Management (IAM) role that allows Amazon Forecast to access the location, and an Key Management Service (KMS) key (optional).</td>
</tr>
<tr>
    <td><CopyableCode code="explainability_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the Explainability export. (pattern: &lt;code&gt;arn:(&#91;a-z\d-&#93;+):forecast:.*:.*:.+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="explainability_export_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the Explainability export. (pattern: &lt;code&gt;arn:(&#91;a-z\d-&#93;+):forecast:.*:.*:.+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="explainability_export_name" /></td>
    <td><code>string</code></td>
    <td>The name of the Explainability export. (pattern: &lt;code&gt;^&#91;a-zA-Z&#93;&#91;a-zA-Z0-9_&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="format" /></td>
    <td><code>string</code></td>
    <td>The format of the exported data, CSV or PARQUET. (pattern: &lt;code&gt;^CSV|PARQUET$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="last_modification_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The last time the resource was modified. The timestamp depends on the status of the job: CREATE_PENDING - The CreationTime. CREATE_IN_PROGRESS - The current timestamp. CREATE_STOPPING - The current timestamp. CREATE_STOPPED - When the job stopped. ACTIVE or CREATE_FAILED - When the job finished or failed.</td>
</tr>
<tr>
    <td><CopyableCode code="message" /></td>
    <td><code>string</code></td>
    <td>Information about any errors that occurred during the export.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the Explainability export. States include: ACTIVE CREATE_PENDING, CREATE_IN_PROGRESS, CREATE_FAILED CREATE_STOPPING, CREATE_STOPPED DELETE_PENDING, DELETE_IN_PROGRESS, DELETE_FAILED</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_explainability_exports">

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
    <td><CopyableCode code="creation_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>When the Explainability was created.</td>
</tr>
<tr>
    <td><CopyableCode code="destination" /></td>
    <td><code>object</code></td>
    <td>The destination for an export job. Provide an S3 path, an Identity and Access Management (IAM) role that allows Amazon Forecast to access the location, and an Key Management Service (KMS) key (optional).</td>
</tr>
<tr>
    <td><CopyableCode code="explainability_export_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the Explainability export. (pattern: &lt;code&gt;arn:(&#91;a-z\d-&#93;+):forecast:.*:.*:.+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="explainability_export_name" /></td>
    <td><code>string</code></td>
    <td>The name of the Explainability export (pattern: &lt;code&gt;^&#91;a-zA-Z&#93;&#91;a-zA-Z0-9_&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="last_modification_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The last time the resource was modified. The timestamp depends on the status of the job: CREATE_PENDING - The CreationTime. CREATE_IN_PROGRESS - The current timestamp. CREATE_STOPPING - The current timestamp. CREATE_STOPPED - When the job stopped. ACTIVE or CREATE_FAILED - When the job finished or failed.</td>
</tr>
<tr>
    <td><CopyableCode code="message" /></td>
    <td><code>string</code></td>
    <td>Information about any errors that may have occurred during the Explainability export.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the Explainability export. States include: ACTIVE CREATE_PENDING, CREATE_IN_PROGRESS, CREATE_FAILED CREATE_STOPPING, CREATE_STOPPED DELETE_PENDING, DELETE_IN_PROGRESS, DELETE_FAILED</td>
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
    <td><a href="#describe_explainability_export"><CopyableCode code="describe_explainability_export" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Describes an Explainability export created using the CreateExplainabilityExport operation.</td>
</tr>
<tr>
    <td><a href="#list_explainability_exports"><CopyableCode code="list_explainability_exports" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns a list of Explainability exports created using the CreateExplainabilityExport operation. This operation returns a summary for each Explainability export. You can filter the list using an array of Filter objects. To retrieve the complete set of properties for a particular Explainability export, use the ARN with the DescribeExplainability operation.</td>
</tr>
<tr>
    <td><a href="#create_explainability_export"><CopyableCode code="create_explainability_export" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ExplainabilityExportName"><code>ExplainabilityExportName</code></a>, <a href="#parameter-ExplainabilityArn"><code>ExplainabilityArn</code></a></td>
    <td></td>
    <td>Exports an Explainability resource created by the CreateExplainability operation. Exported files are exported to an Amazon Simple Storage Service (Amazon S3) bucket. You must specify a DataDestination object that includes an Amazon S3 bucket and an Identity and Access Management (IAM) role that Amazon Forecast can assume to access the Amazon S3 bucket. For more information, see aws-forecast-iam-roles. The Status of the export job must be ACTIVE before you can access the export in your Amazon S3 bucket. To get the status, use the DescribeExplainabilityExport operation.</td>
</tr>
<tr>
    <td><a href="#delete_explainability_export"><CopyableCode code="delete_explainability_export" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes an Explainability export.</td>
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
    defaultValue="describe_explainability_export"
    values={[
        { label: 'describe_explainability_export', value: 'describe_explainability_export' },
        { label: 'list_explainability_exports', value: 'list_explainability_exports' }
    ]}
>
<TabItem value="describe_explainability_export">

Describes an Explainability export created using the CreateExplainabilityExport operation.

```sql
SELECT
creation_time,
destination,
explainability_arn,
explainability_export_arn,
explainability_export_name,
format,
last_modification_time,
message,
status
FROM aws.forecast.explainability_exports
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_explainability_exports">

Returns a list of Explainability exports created using the CreateExplainabilityExport operation. This operation returns a summary for each Explainability export. You can filter the list using an array of Filter objects. To retrieve the complete set of properties for a particular Explainability export, use the ARN with the DescribeExplainability operation.

```sql
SELECT
creation_time,
destination,
explainability_export_arn,
explainability_export_name,
last_modification_time,
message,
status
FROM aws.forecast.explainability_exports
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_explainability_export"
    values={[
        { label: 'create_explainability_export', value: 'create_explainability_export' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_explainability_export">

Exports an Explainability resource created by the CreateExplainability operation. Exported files are exported to an Amazon Simple Storage Service (Amazon S3) bucket. You must specify a DataDestination object that includes an Amazon S3 bucket and an Identity and Access Management (IAM) role that Amazon Forecast can assume to access the Amazon S3 bucket. For more information, see aws-forecast-iam-roles. The Status of the export job must be ACTIVE before you can access the export in your Amazon S3 bucket. To get the status, use the DescribeExplainabilityExport operation.

```sql
INSERT INTO aws.forecast.explainability_exports (
ExplainabilityExportName,
ExplainabilityArn,
Destination,
Tags,
Format,
region
)
SELECT 
'{{ ExplainabilityExportName }}' /* required */,
'{{ ExplainabilityArn }}' /* required */,
'{{ Destination }}',
'{{ Tags }}',
'{{ Format }}',
'{{ region }}'
RETURNING
explainability_export_arn
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: explainability_exports
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the explainability_exports resource.
    - name: ExplainabilityExportName
      value: "{{ ExplainabilityExportName }}"
      description: |
        A unique name for the Explainability export.
    - name: ExplainabilityArn
      value: "{{ ExplainabilityArn }}"
      description: |
        The Amazon Resource Name (ARN) of the Explainability to export.
    - name: Destination
      description: |
        The destination for an export job. Provide an S3 path, an Identity and Access Management (IAM) role that allows Amazon Forecast to access the location, and an Key Management Service (KMS) key (optional).
      value:
        S3Config:
          Path: "{{ Path }}"
          RoleArn: "{{ RoleArn }}"
          KMSKeyArn: "{{ KMSKeyArn }}"
    - name: Tags
      description: |
        Optional metadata to help you categorize and organize your resources. Each tag consists of a key and an optional value, both of which you define. Tag keys and values are case sensitive. The following restrictions apply to tags: For each resource, each tag key must be unique and each tag key must have one value. Maximum number of tags per resource: 50. Maximum key length: 128 Unicode characters in UTF-8. Maximum value length: 256 Unicode characters in UTF-8. Accepted characters: all letters and numbers, spaces representable in UTF-8, and + - = . _ : / @. If your tagging schema is used across other services and resources, the character restrictions of those services also apply. Key prefixes cannot include any upper or lowercase combination of aws: or AWS:. Values can have this prefix. If a tag value has aws as its prefix but the key does not, Forecast considers it to be a user tag and will count against the limit of 50 tags. Tags with only the key prefix of aws do not count against your tags per resource limit. You cannot edit or delete tag keys with this prefix.
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
    - name: Format
      value: "{{ Format }}"
      description: |
        The format of the exported data, CSV or PARQUET.
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_explainability_export"
    values={[
        { label: 'delete_explainability_export', value: 'delete_explainability_export' }
    ]}
>
<TabItem value="delete_explainability_export">

Deletes an Explainability export.

```sql
DELETE FROM aws.forecast.explainability_exports
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
