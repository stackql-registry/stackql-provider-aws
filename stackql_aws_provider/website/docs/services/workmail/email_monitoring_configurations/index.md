--- 
title: email_monitoring_configurations
hide_title: false
hide_table_of_contents: false
keywords:
  - email_monitoring_configurations
  - workmail
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

Creates, updates, deletes, gets or lists an <code>email_monitoring_configurations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="email_monitoring_configurations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.workmail.email_monitoring_configurations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_email_monitoring_configuration"
    values={[
        { label: 'describe_email_monitoring_configuration', value: 'describe_email_monitoring_configuration' }
    ]}
>
<TabItem value="describe_email_monitoring_configuration">

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
    <td><CopyableCode code="LogGroupArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the CloudWatch Log group associated with the email monitoring configuration. (pattern: &lt;code&gt;arn:aws:logs:&#91;a-z\-0-9&#93;*:&#91;0-9&#93;&#123;12&#125;:log-group:(&#91;\.\-_/#A-Za-z0-9&#93;+):\*$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="RoleArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the IAM Role associated with the email monitoring configuration. (pattern: &lt;code&gt;arn:aws:iam:&#91;a-z0-9-&#93;*:&#91;a-z0-9-&#93;+:&#91;A-Za-z0-9&#93;&#91;A-Za-z0-9:_/+=,@.-&#93;&#123;0,1023&#125;&lt;/code&gt;)</td>
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
    <td><a href="#describe_email_monitoring_configuration"><CopyableCode code="describe_email_monitoring_configuration" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Describes the current email monitoring configuration for a specified organization.</td>
</tr>
<tr>
    <td><a href="#put_email_monitoring_configuration"><CopyableCode code="put_email_monitoring_configuration" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-OrganizationId"><code>OrganizationId</code></a>, <a href="#parameter-LogGroupArn"><code>LogGroupArn</code></a></td>
    <td></td>
    <td>Creates or updates the email monitoring configuration for a specified organization.</td>
</tr>
<tr>
    <td><a href="#delete_email_monitoring_configuration"><CopyableCode code="delete_email_monitoring_configuration" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the email monitoring configuration for a specified organization.</td>
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
    defaultValue="describe_email_monitoring_configuration"
    values={[
        { label: 'describe_email_monitoring_configuration', value: 'describe_email_monitoring_configuration' }
    ]}
>
<TabItem value="describe_email_monitoring_configuration">

Describes the current email monitoring configuration for a specified organization.

```sql
SELECT
LogGroupArn,
RoleArn
FROM aws.workmail.email_monitoring_configurations
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="put_email_monitoring_configuration"
    values={[
        { label: 'put_email_monitoring_configuration', value: 'put_email_monitoring_configuration' }
    ]}
>
<TabItem value="put_email_monitoring_configuration">

Creates or updates the email monitoring configuration for a specified organization.

```sql
REPLACE aws.workmail.email_monitoring_configurations
SET 
OrganizationId = '{{ OrganizationId }}',
RoleArn = '{{ RoleArn }}',
LogGroupArn = '{{ LogGroupArn }}'
WHERE 
region = '{{ region }}' --required
AND OrganizationId = '{{ OrganizationId }}' --required
AND LogGroupArn = '{{ LogGroupArn }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_email_monitoring_configuration"
    values={[
        { label: 'delete_email_monitoring_configuration', value: 'delete_email_monitoring_configuration' }
    ]}
>
<TabItem value="delete_email_monitoring_configuration">

Deletes the email monitoring configuration for a specified organization.

```sql
DELETE FROM aws.workmail.email_monitoring_configurations
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
