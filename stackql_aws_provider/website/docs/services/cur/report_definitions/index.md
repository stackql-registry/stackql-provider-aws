--- 
title: report_definitions
hide_title: false
hide_table_of_contents: false
keywords:
  - report_definitions
  - cur
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

Creates, updates, deletes, gets or lists a <code>report_definitions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="report_definitions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.cur.report_definitions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_report_definitions"
    values={[
        { label: 'describe_report_definitions', value: 'describe_report_definitions' }
    ]}
>
<TabItem value="describe_report_definitions">

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
    <td><CopyableCode code="additional_artifacts" /></td>
    <td><code>array</code></td>
    <td>A list of manifests that you want Amazon Web Services to create for this report.</td>
</tr>
<tr>
    <td><CopyableCode code="additional_schema_elements" /></td>
    <td><code>array</code></td>
    <td>A list of strings that indicate additional content that Amazon Web Services includes in the report, such as individual resource IDs.</td>
</tr>
<tr>
    <td><CopyableCode code="billing_view_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon resource name of the billing view. The BillingViewArn is needed to create Amazon Web Services Cost and Usage Report for each billing group maintained in the Amazon Web Services Billing Conductor service. The BillingViewArn for a billing group can be constructed as: arn:aws:billing::payer-account-id:billingview/billing-group-primary-account-id (pattern: &lt;code&gt;(arn:aws(-cn)?:billing::&#91;0-9&#93;&#123;12&#125;:billingview/)?&#91;a-zA-Z0-9_\+=\.\-@&#93;.&#123;1,30&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="compression" /></td>
    <td><code>string</code></td>
    <td>The compression format that Amazon Web Services uses for the report. (ZIP, GZIP, Parquet)</td>
</tr>
<tr>
    <td><CopyableCode code="format" /></td>
    <td><code>string</code></td>
    <td>The format that Amazon Web Services saves the report in. (textORcsv, Parquet)</td>
</tr>
<tr>
    <td><CopyableCode code="refresh_closed_reports" /></td>
    <td><code>boolean</code></td>
    <td>Whether you want Amazon Web Services to update your reports after they have been finalized if Amazon Web Services detects charges related to previous months. These charges can include refunds, credits, or support fees.</td>
</tr>
<tr>
    <td><CopyableCode code="report_name" /></td>
    <td><code>string</code></td>
    <td>The name of the report that you want to create. The name must be unique, is case sensitive, and can't include spaces. (pattern: &lt;code&gt;&#91;0-9A-Za-z!\-_.*\'()&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="report_status" /></td>
    <td><code>object</code></td>
    <td>The status of the report.</td>
</tr>
<tr>
    <td><CopyableCode code="report_versioning" /></td>
    <td><code>string</code></td>
    <td>Whether you want Amazon Web Services to overwrite the previous version of each report or to deliver the report in addition to the previous versions. (CREATE_NEW_REPORT, OVERWRITE_REPORT)</td>
</tr>
<tr>
    <td><CopyableCode code="s3_bucket" /></td>
    <td><code>string</code></td>
    <td>The S3 bucket where Amazon Web Services delivers the report. (pattern: &lt;code&gt;&#91;A-Za-z0-9_\.\-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="s3_prefix" /></td>
    <td><code>string</code></td>
    <td>The prefix that Amazon Web Services adds to the report name when Amazon Web Services delivers the report. Your prefix can't include spaces. (pattern: &lt;code&gt;&#91;0-9A-Za-z!\-_.*\'()/&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="s3_region" /></td>
    <td><code>string</code></td>
    <td>The region of the S3 bucket that Amazon Web Services delivers the report into. (af-south-1, ap-east-1, ap-south-1, ap-south-2, ap-southeast-1, ap-southeast-2, ap-southeast-3, ap-northeast-1, ap-northeast-2, ap-northeast-3, ca-central-1, eu-central-1, eu-central-2, eu-west-1, eu-west-2, eu-west-3, eu-north-1, eu-south-1, eu-south-2, me-central-1, me-south-1, sa-east-1, us-east-1, us-east-2, us-west-1, us-west-2, cn-north-1, cn-northwest-1)</td>
</tr>
<tr>
    <td><CopyableCode code="time_unit" /></td>
    <td><code>string</code></td>
    <td>The length of time covered by the report. (HOURLY, DAILY, MONTHLY)</td>
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
    <td><a href="#describe_report_definitions"><CopyableCode code="describe_report_definitions" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists the Amazon Web Services Cost and Usage Report available to this account.</td>
</tr>
<tr>
    <td><a href="#modify_report_definition"><CopyableCode code="modify_report_definition" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ReportName"><code>ReportName</code></a>, <a href="#parameter-ReportDefinition"><code>ReportDefinition</code></a></td>
    <td></td>
    <td>Allows you to programmatically update your report preferences.</td>
</tr>
<tr>
    <td><a href="#put_report_definition"><CopyableCode code="put_report_definition" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ReportDefinition"><code>ReportDefinition</code></a></td>
    <td></td>
    <td>Creates a new report using the description that you provide.</td>
</tr>
<tr>
    <td><a href="#delete_report_definition"><CopyableCode code="delete_report_definition" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the specified report. Any tags associated with the report are also deleted.</td>
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
    defaultValue="describe_report_definitions"
    values={[
        { label: 'describe_report_definitions', value: 'describe_report_definitions' }
    ]}
>
<TabItem value="describe_report_definitions">

Lists the Amazon Web Services Cost and Usage Report available to this account.

```sql
SELECT
additional_artifacts,
additional_schema_elements,
billing_view_arn,
compression,
format,
refresh_closed_reports,
report_name,
report_status,
report_versioning,
s3_bucket,
s3_prefix,
s3_region,
time_unit
FROM aws.cur.report_definitions
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="modify_report_definition"
    values={[
        { label: 'modify_report_definition', value: 'modify_report_definition' }
    ]}
>
<TabItem value="modify_report_definition">

Allows you to programmatically update your report preferences.

```sql
UPDATE aws.cur.report_definitions
SET 
ReportName = '{{ ReportName }}',
ReportDefinition = '{{ ReportDefinition }}'
WHERE 
region = '{{ region }}' --required
AND ReportName = '{{ ReportName }}' --required
AND ReportDefinition = '{{ ReportDefinition }}' --required;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="put_report_definition"
    values={[
        { label: 'put_report_definition', value: 'put_report_definition' }
    ]}
>
<TabItem value="put_report_definition">

Creates a new report using the description that you provide.

```sql
REPLACE aws.cur.report_definitions
SET 
ReportDefinition = '{{ ReportDefinition }}',
Tags = '{{ Tags }}'
WHERE 
region = '{{ region }}' --required
AND ReportDefinition = '{{ ReportDefinition }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_report_definition"
    values={[
        { label: 'delete_report_definition', value: 'delete_report_definition' }
    ]}
>
<TabItem value="delete_report_definition">

Deletes the specified report. Any tags associated with the report are also deleted.

```sql
DELETE FROM aws.cur.report_definitions
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
