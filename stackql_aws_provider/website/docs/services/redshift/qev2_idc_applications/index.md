--- 
title: qev2_idc_applications
hide_title: false
hide_table_of_contents: false
keywords:
  - qev2_idc_applications
  - redshift
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

Creates, updates, deletes, gets or lists a <code>qev2_idc_applications</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="qev2_idc_applications" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.redshift.qev2_idc_applications" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_qev2_idc_applications"
    values={[
        { label: 'describe_qev2_idc_applications', value: 'describe_qev2_idc_applications' }
    ]}
>
<TabItem value="describe_qev2_idc_applications">

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
    <td><CopyableCode code="idc_display_name" /></td>
    <td><code>string</code></td>
    <td>The display name for the Amazon Redshift Query Editor (QEV2) IAM Identity Center application. It appears in the console.</td>
</tr>
<tr>
    <td><CopyableCode code="idc_instance_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) for the IAM Identity Center instance that the Amazon Redshift Query Editor (QEV2) application integrates with.</td>
</tr>
<tr>
    <td><CopyableCode code="idc_managed_application_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) for the Amazon Redshift Query Editor (QEV2) IAM Identity Center managed application.</td>
</tr>
<tr>
    <td><CopyableCode code="idc_onboard_status" /></td>
    <td><code>string</code></td>
    <td>The onboarding status for the Amazon Redshift Query Editor (QEV2) IAM Identity Center application.</td>
</tr>
<tr>
    <td><CopyableCode code="qev_2_idc_application_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) for the Amazon Redshift Query Editor (QEV2) application that integrates with IAM Identity Center.</td>
</tr>
<tr>
    <td><CopyableCode code="qev_2_idc_application_name" /></td>
    <td><code>string</code></td>
    <td>The name of the Amazon Redshift Query Editor (QEV2) application in IAM Identity Center.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>string</code></td>
    <td>A list of tags associated with the application. Tags are key-value pairs that you can use to organize and identify your resources.</td>
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
    <td><a href="#describe_qev2_idc_applications"><CopyableCode code="describe_qev2_idc_applications" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-Qev2IdcApplicationArn"><code>Qev2IdcApplicationArn</code></a>, <a href="#parameter-MaxRecords"><code>MaxRecords</code></a>, <a href="#parameter-Marker"><code>Marker</code></a></td>
    <td>Lists the Amazon Redshift Query Editor (QEV2) IAM Identity Center applications. To retrieve additional results, use the MaxRecords and Marker parameters.</td>
</tr>
<tr>
    <td><a href="#create_qev2_idc_application"><CopyableCode code="create_qev2_idc_application" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-IdcInstanceArn"><code>IdcInstanceArn</code></a>, <a href="#parameter-Qev2IdcApplicationName"><code>Qev2IdcApplicationName</code></a>, <a href="#parameter-IdcDisplayName"><code>IdcDisplayName</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-Tags"><code>Tags</code></a></td>
    <td>Creates an Amazon Redshift Query Editor (QEV2) IAM Identity Center application.</td>
</tr>
<tr>
    <td><a href="#modify_qev2_idc_application"><CopyableCode code="modify_qev2_idc_application" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-Qev2IdcApplicationArn"><code>Qev2IdcApplicationArn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-IdcDisplayName"><code>IdcDisplayName</code></a></td>
    <td>Modifies an Amazon Redshift Query Editor (QEV2) IAM Identity Center application.</td>
</tr>
<tr>
    <td><a href="#delete_qev2_idc_application"><CopyableCode code="delete_qev2_idc_application" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-Qev2IdcApplicationArn"><code>Qev2IdcApplicationArn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes an Amazon Redshift Query Editor (QEV2) IAM Identity Center application.</td>
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
<tr id="parameter-IdcDisplayName">
    <td><CopyableCode code="IdcDisplayName" /></td>
    <td><code>string</code></td>
    <td>The display name for the Amazon Redshift Query Editor (QEV2) IAM Identity Center application. It appears in the console.</td>
</tr>
<tr id="parameter-IdcInstanceArn">
    <td><CopyableCode code="IdcInstanceArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the IAM Identity Center instance used to create the Amazon Redshift Query Editor (QEV2) managed application.</td>
</tr>
<tr id="parameter-Qev2IdcApplicationArn">
    <td><CopyableCode code="Qev2IdcApplicationArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) for the Amazon Redshift Query Editor (QEV2) IAM Identity Center application to delete.</td>
</tr>
<tr id="parameter-Qev2IdcApplicationName">
    <td><CopyableCode code="Qev2IdcApplicationName" /></td>
    <td><code>string</code></td>
    <td>The name of the Amazon Redshift Query Editor (QEV2) application in IAM Identity Center.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-IdcDisplayName">
    <td><CopyableCode code="IdcDisplayName" /></td>
    <td><code>string</code></td>
    <td>The display name for the Amazon Redshift Query Editor (QEV2) IAM Identity Center application. It appears in the console.</td>
</tr>
<tr id="parameter-Marker">
    <td><CopyableCode code="Marker" /></td>
    <td><code>string</code></td>
    <td>A value that indicates the starting point for the next set of response records in a subsequent request. If a value is returned in a response, you can retrieve the next set of records by providing this returned marker value in the Marker parameter and retrying the command. If the Marker field is empty, all response records have been retrieved for the request.</td>
</tr>
<tr id="parameter-MaxRecords">
    <td><CopyableCode code="MaxRecords" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of response records to return in each call. If the number of remaining response records exceeds the specified MaxRecords value, a value is returned in a marker field of the response. You can retrieve the next set of records by retrying the command with the returned marker value.</td>
</tr>
<tr id="parameter-Qev2IdcApplicationArn">
    <td><CopyableCode code="Qev2IdcApplicationArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) for the Amazon Redshift Query Editor (QEV2) application that integrates with IAM Identity Center.</td>
</tr>
<tr id="parameter-Tags">
    <td><CopyableCode code="Tags" /></td>
    <td><code>array</code></td>
    <td>A list of tags to associate with the application. Tags are key-value pairs that you can use to organize and identify your resources.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_qev2_idc_applications"
    values={[
        { label: 'describe_qev2_idc_applications', value: 'describe_qev2_idc_applications' }
    ]}
>
<TabItem value="describe_qev2_idc_applications">

Lists the Amazon Redshift Query Editor (QEV2) IAM Identity Center applications. To retrieve additional results, use the MaxRecords and Marker parameters.

```sql
SELECT
idc_display_name,
idc_instance_arn,
idc_managed_application_arn,
idc_onboard_status,
qev_2_idc_application_arn,
qev_2_idc_application_name,
tags
FROM aws.redshift.qev2_idc_applications
WHERE region = '{{ region }}' -- required
AND Qev2IdcApplicationArn = '{{ Qev2IdcApplicationArn }}'
AND MaxRecords = '{{ MaxRecords }}'
AND Marker = '{{ Marker }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_qev2_idc_application"
    values={[
        { label: 'create_qev2_idc_application', value: 'create_qev2_idc_application' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_qev2_idc_application">

Creates an Amazon Redshift Query Editor (QEV2) IAM Identity Center application.

```sql
INSERT INTO aws.redshift.qev2_idc_applications (
IdcInstanceArn,
Qev2IdcApplicationName,
IdcDisplayName,
region,
Tags
)
SELECT 
'{{ IdcInstanceArn }}',
'{{ Qev2IdcApplicationName }}',
'{{ IdcDisplayName }}',
'{{ region }}',
'{{ Tags }}'
RETURNING
idc_display_name,
idc_instance_arn,
idc_managed_application_arn,
idc_onboard_status,
qev_2_idc_application_arn,
qev_2_idc_application_name,
tags
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: qev2_idc_applications
  props:
    - name: IdcInstanceArn
      value: "{{ IdcInstanceArn }}"
      description: Required parameter for the qev2_idc_applications resource.
    - name: Qev2IdcApplicationName
      value: "{{ Qev2IdcApplicationName }}"
      description: Required parameter for the qev2_idc_applications resource.
    - name: IdcDisplayName
      value: "{{ IdcDisplayName }}"
      description: Required parameter for the qev2_idc_applications resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the qev2_idc_applications resource.
    - name: Tags
      value: "{{ Tags }}"
      description: A list of tags to associate with the application. Tags are key-value pairs that you can use to organize and identify your resources.
      description: A list of tags to associate with the application. Tags are key-value pairs that you can use to organize and identify your resources.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="modify_qev2_idc_application"
    values={[
        { label: 'modify_qev2_idc_application', value: 'modify_qev2_idc_application' }
    ]}
>
<TabItem value="modify_qev2_idc_application">

Modifies an Amazon Redshift Query Editor (QEV2) IAM Identity Center application.

```sql
UPDATE aws.redshift.qev2_idc_applications
SET 
-- No updatable properties
WHERE 
Qev2IdcApplicationArn = '{{ Qev2IdcApplicationArn }}' --required
AND region = '{{ region }}' --required
AND IdcDisplayName = '{{ IdcDisplayName}}'
RETURNING
idc_display_name,
idc_instance_arn,
idc_managed_application_arn,
idc_onboard_status,
qev_2_idc_application_arn,
qev_2_idc_application_name,
tags;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_qev2_idc_application"
    values={[
        { label: 'delete_qev2_idc_application', value: 'delete_qev2_idc_application' }
    ]}
>
<TabItem value="delete_qev2_idc_application">

Deletes an Amazon Redshift Query Editor (QEV2) IAM Identity Center application.

```sql
DELETE FROM aws.redshift.qev2_idc_applications
WHERE Qev2IdcApplicationArn = '{{ Qev2IdcApplicationArn }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
