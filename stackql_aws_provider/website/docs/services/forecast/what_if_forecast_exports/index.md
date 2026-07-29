--- 
title: what_if_forecast_exports
hide_title: false
hide_table_of_contents: false
keywords:
  - what_if_forecast_exports
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

Creates, updates, deletes, gets or lists a <code>what_if_forecast_exports</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="what_if_forecast_exports" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.forecast.what_if_forecast_exports" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_what_if_forecast_export"
    values={[
        { label: 'describe_what_if_forecast_export', value: 'describe_what_if_forecast_export' },
        { label: 'list_what_if_forecast_exports', value: 'list_what_if_forecast_exports' }
    ]}
>
<TabItem value="describe_what_if_forecast_export">

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
    <td>When the what-if forecast export was created.</td>
</tr>
<tr>
    <td><CopyableCode code="destination" /></td>
    <td><code>object</code></td>
    <td>The destination for an export job. Provide an S3 path, an Identity and Access Management (IAM) role that allows Amazon Forecast to access the location, and an Key Management Service (KMS) key (optional).</td>
</tr>
<tr>
    <td><CopyableCode code="estimated_time_remaining_in_minutes" /></td>
    <td><code>integer (int64)</code></td>
    <td>The approximate time remaining to complete the what-if forecast export, in minutes.</td>
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
    <td>If an error occurred, an informational message about the error.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the what-if forecast. States include: ACTIVE CREATE_PENDING, CREATE_IN_PROGRESS, CREATE_FAILED CREATE_STOPPING, CREATE_STOPPED DELETE_PENDING, DELETE_IN_PROGRESS, DELETE_FAILED The Status of the what-if forecast export must be ACTIVE before you can access the forecast export.</td>
</tr>
<tr>
    <td><CopyableCode code="what_if_forecast_arns" /></td>
    <td><code>array</code></td>
    <td>An array of Amazon Resource Names (ARNs) that represent all of the what-if forecasts exported in this resource.</td>
</tr>
<tr>
    <td><CopyableCode code="what_if_forecast_export_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the what-if forecast export. (pattern: &lt;code&gt;arn:(&#91;a-z\d-&#93;+):forecast:.*:.*:.+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="what_if_forecast_export_name" /></td>
    <td><code>string</code></td>
    <td>The name of the what-if forecast export. (pattern: &lt;code&gt;^&#91;a-zA-Z&#93;&#91;a-zA-Z0-9_&#93;*&lt;/code&gt;)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_what_if_forecast_exports">

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
    <td>When the what-if forecast export was created.</td>
</tr>
<tr>
    <td><CopyableCode code="destination" /></td>
    <td><code>object</code></td>
    <td>The destination for an export job. Provide an S3 path, an Identity and Access Management (IAM) role that allows Amazon Forecast to access the location, and an Key Management Service (KMS) key (optional).</td>
</tr>
<tr>
    <td><CopyableCode code="last_modification_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The last time the resource was modified. The timestamp depends on the status of the job: CREATE_PENDING - The CreationTime. CREATE_IN_PROGRESS - The current timestamp. CREATE_STOPPING - The current timestamp. CREATE_STOPPED - When the job stopped. ACTIVE or CREATE_FAILED - When the job finished or failed.</td>
</tr>
<tr>
    <td><CopyableCode code="message" /></td>
    <td><code>string</code></td>
    <td>If an error occurred, an informational message about the error.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the what-if forecast export. States include: ACTIVE CREATE_PENDING, CREATE_IN_PROGRESS, CREATE_FAILED CREATE_STOPPING, CREATE_STOPPED DELETE_PENDING, DELETE_IN_PROGRESS, DELETE_FAILED The Status of the what-if analysis must be ACTIVE before you can access the analysis.</td>
</tr>
<tr>
    <td><CopyableCode code="what_if_forecast_arns" /></td>
    <td><code>array</code></td>
    <td>An array of Amazon Resource Names (ARNs) that define the what-if forecasts included in the export.</td>
</tr>
<tr>
    <td><CopyableCode code="what_if_forecast_export_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the what-if forecast export. (pattern: &lt;code&gt;arn:(&#91;a-z\d-&#93;+):forecast:.*:.*:.+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="what_if_forecast_export_name" /></td>
    <td><code>string</code></td>
    <td>The what-if forecast export name. (pattern: &lt;code&gt;^&#91;a-zA-Z&#93;&#91;a-zA-Z0-9_&#93;*&lt;/code&gt;)</td>
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
    <td><a href="#describe_what_if_forecast_export"><CopyableCode code="describe_what_if_forecast_export" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Describes the what-if forecast export created using the CreateWhatIfForecastExport operation. In addition to listing the properties provided in the CreateWhatIfForecastExport request, this operation lists the following properties: CreationTime LastModificationTime Message - If an error occurred, information about the error. Status</td>
</tr>
<tr>
    <td><a href="#list_what_if_forecast_exports"><CopyableCode code="list_what_if_forecast_exports" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns a list of what-if forecast exports created using the CreateWhatIfForecastExport operation. For each what-if forecast export, this operation returns a summary of its properties, including its Amazon Resource Name (ARN). You can retrieve the complete set of properties by using the what-if forecast export ARN with the DescribeWhatIfForecastExport operation.</td>
</tr>
<tr>
    <td><a href="#create_what_if_forecast_export"><CopyableCode code="create_what_if_forecast_export" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-WhatIfForecastExportName"><code>WhatIfForecastExportName</code></a>, <a href="#parameter-WhatIfForecastArns"><code>WhatIfForecastArns</code></a></td>
    <td></td>
    <td>Exports a forecast created by the CreateWhatIfForecast operation to your Amazon Simple Storage Service (Amazon S3) bucket. The forecast file name will match the following conventions: ≈<code>&lt;ForecastExportJobName&gt;</code>_<code>&lt;ExportTimestamp&gt;</code>_<code>&lt;PartNumber&gt;</code> The <code>&lt;ExportTimestamp&gt;</code> component is in Java SimpleDateFormat (yyyy-MM-ddTHH-mm-ssZ). You must specify a DataDestination object that includes an Identity and Access Management (IAM) role that Amazon Forecast can assume to access the Amazon S3 bucket. For more information, see aws-forecast-iam-roles. For more information, see howitworks-forecast. To get a list of all your what-if forecast export jobs, use the ListWhatIfForecastExports operation. The Status of the forecast export job must be ACTIVE before you can access the forecast in your Amazon S3 bucket. To get the status, use the DescribeWhatIfForecastExport operation.</td>
</tr>
<tr>
    <td><a href="#delete_what_if_forecast_export"><CopyableCode code="delete_what_if_forecast_export" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a what-if forecast export created using the CreateWhatIfForecastExport operation. You can delete only what-if forecast exports that have a status of ACTIVE or CREATE_FAILED. To get the status, use the DescribeWhatIfForecastExport operation.</td>
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
    defaultValue="describe_what_if_forecast_export"
    values={[
        { label: 'describe_what_if_forecast_export', value: 'describe_what_if_forecast_export' },
        { label: 'list_what_if_forecast_exports', value: 'list_what_if_forecast_exports' }
    ]}
>
<TabItem value="describe_what_if_forecast_export">

Describes the what-if forecast export created using the CreateWhatIfForecastExport operation. In addition to listing the properties provided in the CreateWhatIfForecastExport request, this operation lists the following properties: CreationTime LastModificationTime Message - If an error occurred, information about the error. Status

```sql
SELECT
creation_time,
destination,
estimated_time_remaining_in_minutes,
format,
last_modification_time,
message,
status,
what_if_forecast_arns,
what_if_forecast_export_arn,
what_if_forecast_export_name
FROM aws.forecast.what_if_forecast_exports
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_what_if_forecast_exports">

Returns a list of what-if forecast exports created using the CreateWhatIfForecastExport operation. For each what-if forecast export, this operation returns a summary of its properties, including its Amazon Resource Name (ARN). You can retrieve the complete set of properties by using the what-if forecast export ARN with the DescribeWhatIfForecastExport operation.

```sql
SELECT
creation_time,
destination,
last_modification_time,
message,
status,
what_if_forecast_arns,
what_if_forecast_export_arn,
what_if_forecast_export_name
FROM aws.forecast.what_if_forecast_exports
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_what_if_forecast_export"
    values={[
        { label: 'create_what_if_forecast_export', value: 'create_what_if_forecast_export' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_what_if_forecast_export">

Exports a forecast created by the CreateWhatIfForecast operation to your Amazon Simple Storage Service (Amazon S3) bucket. The forecast file name will match the following conventions: ≈<code>&lt;ForecastExportJobName&gt;</code>_<code>&lt;ExportTimestamp&gt;</code>_<code>&lt;PartNumber&gt;</code> The <code>&lt;ExportTimestamp&gt;</code> component is in Java SimpleDateFormat (yyyy-MM-ddTHH-mm-ssZ). You must specify a DataDestination object that includes an Identity and Access Management (IAM) role that Amazon Forecast can assume to access the Amazon S3 bucket. For more information, see aws-forecast-iam-roles. For more information, see howitworks-forecast. To get a list of all your what-if forecast export jobs, use the ListWhatIfForecastExports operation. The Status of the forecast export job must be ACTIVE before you can access the forecast in your Amazon S3 bucket. To get the status, use the DescribeWhatIfForecastExport operation.

```sql
INSERT INTO aws.forecast.what_if_forecast_exports (
WhatIfForecastExportName,
WhatIfForecastArns,
Destination,
Tags,
Format,
region
)
SELECT 
'{{ WhatIfForecastExportName }}' /* required */,
'{{ WhatIfForecastArns }}' /* required */,
'{{ Destination }}',
'{{ Tags }}',
'{{ Format }}',
'{{ region }}'
RETURNING
what_if_forecast_export_arn
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: what_if_forecast_exports
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the what_if_forecast_exports resource.
    - name: WhatIfForecastExportName
      value: "{{ WhatIfForecastExportName }}"
      description: |
        The name of the what-if forecast to export.
    - name: WhatIfForecastArns
      value:
        - "{{ WhatIfForecastArns }}"
      description: |
        The list of what-if forecast Amazon Resource Names (ARNs) to export.
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
        A list of tags to apply to the what if forecast.
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
    defaultValue="delete_what_if_forecast_export"
    values={[
        { label: 'delete_what_if_forecast_export', value: 'delete_what_if_forecast_export' }
    ]}
>
<TabItem value="delete_what_if_forecast_export">

Deletes a what-if forecast export created using the CreateWhatIfForecastExport operation. You can delete only what-if forecast exports that have a status of ACTIVE or CREATE_FAILED. To get the status, use the DescribeWhatIfForecastExport operation.

```sql
DELETE FROM aws.forecast.what_if_forecast_exports
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
