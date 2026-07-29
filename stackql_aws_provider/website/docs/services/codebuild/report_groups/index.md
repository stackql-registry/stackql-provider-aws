--- 
title: report_groups
hide_title: false
hide_table_of_contents: false
keywords:
  - report_groups
  - codebuild
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

Creates, updates, deletes, gets or lists a <code>report_groups</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="report_groups" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.codebuild.report_groups" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="batch_get_report_groups"
    values={[
        { label: 'batch_get_report_groups', value: 'batch_get_report_groups' },
        { label: 'list_report_groups', value: 'list_report_groups' }
    ]}
>
<TabItem value="batch_get_report_groups">

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
    <td><CopyableCode code="report_groups" /></td>
    <td><code>array</code></td>
    <td>The array of report groups returned by BatchGetReportGroups.</td>
</tr>
<tr>
    <td><CopyableCode code="report_groups_not_found" /></td>
    <td><code>array</code></td>
    <td>An array of ARNs passed to BatchGetReportGroups that are not associated with a ReportGroup.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_report_groups">

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
    <td><CopyableCode code="report_group" /></td>
    <td><code>string</code></td>
    <td>The list of ARNs for the report groups in the current Amazon Web Services account.</td>
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
    <td><a href="#batch_get_report_groups"><CopyableCode code="batch_get_report_groups" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns an array of report groups.</td>
</tr>
<tr>
    <td><a href="#list_report_groups"><CopyableCode code="list_report_groups" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets a list ARNs for the report groups in the current Amazon Web Services account.</td>
</tr>
<tr>
    <td><a href="#create_report_group"><CopyableCode code="create_report_group" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-type"><code>type</code></a>, <a href="#parameter-exportConfig"><code>exportConfig</code></a></td>
    <td></td>
    <td>Creates a report group. A report group contains a collection of reports.</td>
</tr>
<tr>
    <td><a href="#update_report_group"><CopyableCode code="update_report_group" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-arn"><code>arn</code></a></td>
    <td></td>
    <td>Updates a report group.</td>
</tr>
<tr>
    <td><a href="#delete_report_group"><CopyableCode code="delete_report_group" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a report group. Before you delete a report group, you must delete its reports.</td>
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
    defaultValue="batch_get_report_groups"
    values={[
        { label: 'batch_get_report_groups', value: 'batch_get_report_groups' },
        { label: 'list_report_groups', value: 'list_report_groups' }
    ]}
>
<TabItem value="batch_get_report_groups">

Returns an array of report groups.

```sql
SELECT
report_groups,
report_groups_not_found
FROM aws.codebuild.report_groups
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_report_groups">

Gets a list ARNs for the report groups in the current Amazon Web Services account.

```sql
SELECT
report_group
FROM aws.codebuild.report_groups
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_report_group"
    values={[
        { label: 'create_report_group', value: 'create_report_group' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_report_group">

Creates a report group. A report group contains a collection of reports.

```sql
INSERT INTO aws.codebuild.report_groups (
name,
type,
exportConfig,
tags,
region
)
SELECT 
'{{ name }}' /* required */,
'{{ type }}' /* required */,
'{{ exportConfig }}' /* required */,
'{{ tags }}',
'{{ region }}'
RETURNING
report_group
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: report_groups
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the report_groups resource.
    - name: name
      value: "{{ name }}"
      description: |
        The name of the report group.
    - name: type
      value: "{{ type }}"
      description: |
        The type of report group.
      valid_values: ['TEST', 'CODE_COVERAGE']
    - name: exportConfig
      description: |
        A ReportExportConfig object that contains information about where the report group test results are exported.
      value:
        exportConfigType: "{{ exportConfigType }}"
        s3Destination:
          bucket: "{{ bucket }}"
          bucketOwner: "{{ bucketOwner }}"
          path: "{{ path }}"
          packaging: "{{ packaging }}"
          encryptionKey: "{{ encryptionKey }}"
          encryptionDisabled: {{ encryptionDisabled }}
    - name: tags
      description: |
        A list of tag key and value pairs associated with this report group. These tags are available for use by Amazon Web Services services that support CodeBuild report group tags.
      value:
        - key: "{{ key }}"
          value: "{{ value }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_report_group"
    values={[
        { label: 'update_report_group', value: 'update_report_group' }
    ]}
>
<TabItem value="update_report_group">

Updates a report group.

```sql
UPDATE aws.codebuild.report_groups
SET 
arn = '{{ arn }}',
exportConfig = '{{ exportConfig }}',
tags = '{{ tags }}'
WHERE 
region = '{{ region }}' --required
AND arn = '{{ arn }}' --required
RETURNING
report_group;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_report_group"
    values={[
        { label: 'delete_report_group', value: 'delete_report_group' }
    ]}
>
<TabItem value="delete_report_group">

Deletes a report group. Before you delete a report group, you must delete its reports.

```sql
DELETE FROM aws.codebuild.report_groups
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
