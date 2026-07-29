--- 
title: license_manager_report_generators
hide_title: false
hide_table_of_contents: false
keywords:
  - license_manager_report_generators
  - license_manager
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

Creates, updates, deletes, gets or lists a <code>license_manager_report_generators</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="license_manager_report_generators" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.license_manager.license_manager_report_generators" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_license_manager_report_generator"
    values={[
        { label: 'get_license_manager_report_generator', value: 'get_license_manager_report_generator' },
        { label: 'list_license_manager_report_generators', value: 'list_license_manager_report_generators' }
    ]}
>
<TabItem value="get_license_manager_report_generator">

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
    <td><CopyableCode code="create_time" /></td>
    <td><code>string</code></td>
    <td>Time the report was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Description of the report generator.</td>
</tr>
<tr>
    <td><CopyableCode code="last_report_generation_time" /></td>
    <td><code>string</code></td>
    <td>Time the last report was generated at.</td>
</tr>
<tr>
    <td><CopyableCode code="last_run_failure_reason" /></td>
    <td><code>string</code></td>
    <td>Failure message for the last report generation attempt.</td>
</tr>
<tr>
    <td><CopyableCode code="last_run_status" /></td>
    <td><code>string</code></td>
    <td>Status of the last report generation attempt.</td>
</tr>
<tr>
    <td><CopyableCode code="license_manager_report_generator_arn" /></td>
    <td><code>string</code></td>
    <td>Amazon Resource Name (ARN) of the report generator.</td>
</tr>
<tr>
    <td><CopyableCode code="report_context" /></td>
    <td><code>object</code></td>
    <td>License configuration type for this generator.</td>
</tr>
<tr>
    <td><CopyableCode code="report_creator_account" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services account ID used to create the report generator.</td>
</tr>
<tr>
    <td><CopyableCode code="report_frequency" /></td>
    <td><code>object</code></td>
    <td>Details about how frequently reports are generated.</td>
</tr>
<tr>
    <td><CopyableCode code="report_generator_name" /></td>
    <td><code>string</code></td>
    <td>Name of the report generator.</td>
</tr>
<tr>
    <td><CopyableCode code="report_type" /></td>
    <td><code>array</code></td>
    <td>Type of reports that are generated.</td>
</tr>
<tr>
    <td><CopyableCode code="s3_location" /></td>
    <td><code>object</code></td>
    <td>Details of the S3 bucket that report generator reports are published to.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>array</code></td>
    <td>Tags associated with the report generator.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_license_manager_report_generators">

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
    <td><CopyableCode code="next_token" /></td>
    <td><code>string</code></td>
    <td>Token for the next set of results.</td>
</tr>
<tr>
    <td><CopyableCode code="report_generators" /></td>
    <td><code>array</code></td>
    <td>A report generator that creates periodic reports about your license configurations.</td>
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
    <td><a href="#get_license_manager_report_generator"><CopyableCode code="get_license_manager_report_generator" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets information about the specified report generator.</td>
</tr>
<tr>
    <td><a href="#list_license_manager_report_generators"><CopyableCode code="list_license_manager_report_generators" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists the report generators for your account.</td>
</tr>
<tr>
    <td><a href="#create_license_manager_report_generator"><CopyableCode code="create_license_manager_report_generator" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ReportGeneratorName"><code>ReportGeneratorName</code></a>, <a href="#parameter-Type"><code>Type</code></a>, <a href="#parameter-ReportContext"><code>ReportContext</code></a>, <a href="#parameter-ReportFrequency"><code>ReportFrequency</code></a>, <a href="#parameter-ClientToken"><code>ClientToken</code></a></td>
    <td></td>
    <td>Creates a report generator.</td>
</tr>
<tr>
    <td><a href="#update_license_manager_report_generator"><CopyableCode code="update_license_manager_report_generator" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-LicenseManagerReportGeneratorArn"><code>LicenseManagerReportGeneratorArn</code></a>, <a href="#parameter-ReportGeneratorName"><code>ReportGeneratorName</code></a>, <a href="#parameter-Type"><code>Type</code></a>, <a href="#parameter-ReportContext"><code>ReportContext</code></a>, <a href="#parameter-ReportFrequency"><code>ReportFrequency</code></a>, <a href="#parameter-ClientToken"><code>ClientToken</code></a></td>
    <td></td>
    <td>Updates a report generator. After you make changes to a report generator, it starts generating new reports within 60 minutes of being updated.</td>
</tr>
<tr>
    <td><a href="#delete_license_manager_report_generator"><CopyableCode code="delete_license_manager_report_generator" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the specified report generator. This action deletes the report generator, which stops it from generating future reports. The action cannot be reversed. It has no effect on the previous reports from this generator.</td>
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
    defaultValue="get_license_manager_report_generator"
    values={[
        { label: 'get_license_manager_report_generator', value: 'get_license_manager_report_generator' },
        { label: 'list_license_manager_report_generators', value: 'list_license_manager_report_generators' }
    ]}
>
<TabItem value="get_license_manager_report_generator">

Gets information about the specified report generator.

```sql
SELECT
create_time,
description,
last_report_generation_time,
last_run_failure_reason,
last_run_status,
license_manager_report_generator_arn,
report_context,
report_creator_account,
report_frequency,
report_generator_name,
report_type,
s3_location,
tags
FROM aws.license_manager.license_manager_report_generators
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_license_manager_report_generators">

Lists the report generators for your account.

```sql
SELECT
next_token,
report_generators
FROM aws.license_manager.license_manager_report_generators
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_license_manager_report_generator"
    values={[
        { label: 'create_license_manager_report_generator', value: 'create_license_manager_report_generator' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_license_manager_report_generator">

Creates a report generator.

```sql
INSERT INTO aws.license_manager.license_manager_report_generators (
ReportGeneratorName,
Type,
ReportContext,
ReportFrequency,
ClientToken,
Description,
Tags,
region
)
SELECT 
'{{ ReportGeneratorName }}' /* required */,
'{{ Type }}' /* required */,
'{{ ReportContext }}' /* required */,
'{{ ReportFrequency }}' /* required */,
'{{ ClientToken }}' /* required */,
'{{ Description }}',
'{{ Tags }}',
'{{ region }}'
RETURNING
license_manager_report_generator_arn
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: license_manager_report_generators
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the license_manager_report_generators resource.
    - name: ReportGeneratorName
      value: "{{ ReportGeneratorName }}"
      description: |
        Name of the report generator.
    - name: Type
      value:
        - "{{ Type }}"
      description: |
        Type of reports to generate. The following report types an be generated: License configuration report - Reports the number and details of consumed licenses for a license configuration. Resource report - Reports the tracked licenses and resource consumption for a license configuration.
    - name: ReportContext
      description: |
        Defines the type of license configuration the report generator tracks.
      value:
        licenseConfigurationArns:
          - "{{ licenseConfigurationArns }}"
        licenseAssetGroupArns:
          - "{{ licenseAssetGroupArns }}"
        reportStartDate: "{{ reportStartDate }}"
        reportEndDate: "{{ reportEndDate }}"
    - name: ReportFrequency
      description: |
        Frequency by which reports are generated. Reports can be generated daily, monthly, or weekly.
      value:
        value: {{ value }}
        period: "{{ period }}"
    - name: ClientToken
      value: "{{ ClientToken }}"
      description: |
        Unique, case-sensitive identifier that you provide to ensure the idempotency of the request.
    - name: Description
      value: "{{ Description }}"
      description: |
        Description of the report generator.
    - name: Tags
      description: |
        Tags to add to the report generator.
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_license_manager_report_generator"
    values={[
        { label: 'update_license_manager_report_generator', value: 'update_license_manager_report_generator' }
    ]}
>
<TabItem value="update_license_manager_report_generator">

Updates a report generator. After you make changes to a report generator, it starts generating new reports within 60 minutes of being updated.

```sql
UPDATE aws.license_manager.license_manager_report_generators
SET 
LicenseManagerReportGeneratorArn = '{{ LicenseManagerReportGeneratorArn }}',
ReportGeneratorName = '{{ ReportGeneratorName }}',
Type = '{{ Type }}',
ReportContext = '{{ ReportContext }}',
ReportFrequency = '{{ ReportFrequency }}',
ClientToken = '{{ ClientToken }}',
Description = '{{ Description }}'
WHERE 
region = '{{ region }}' --required
AND LicenseManagerReportGeneratorArn = '{{ LicenseManagerReportGeneratorArn }}' --required
AND ReportGeneratorName = '{{ ReportGeneratorName }}' --required
AND Type = '{{ Type }}' --required
AND ReportContext = '{{ ReportContext }}' --required
AND ReportFrequency = '{{ ReportFrequency }}' --required
AND ClientToken = '{{ ClientToken }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_license_manager_report_generator"
    values={[
        { label: 'delete_license_manager_report_generator', value: 'delete_license_manager_report_generator' }
    ]}
>
<TabItem value="delete_license_manager_report_generator">

Deletes the specified report generator. This action deletes the report generator, which stops it from generating future reports. The action cannot be reversed. It has no effect on the previous reports from this generator.

```sql
DELETE FROM aws.license_manager.license_manager_report_generators
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
