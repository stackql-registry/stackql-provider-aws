--- 
title: default_q_business_applications
hide_title: false
hide_table_of_contents: false
keywords:
  - default_q_business_applications
  - quicksight
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

Creates, updates, deletes, gets or lists a <code>default_q_business_applications</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="default_q_business_applications" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.quicksight.default_q_business_applications" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_default_q_business_application"
    values={[
        { label: 'describe_default_q_business_application', value: 'describe_default_q_business_application' }
    ]}
>
<TabItem value="describe_default_q_business_application">

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
    <td><CopyableCode code="application_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the Amazon Q Business application that is linked to the Quick Sight account.</td>
</tr>
<tr>
    <td><CopyableCode code="request_id" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services request ID for this operation.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>integer</code></td>
    <td>The HTTP status of the request.</td>
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
    <td><a href="#describe_default_q_business_application"><CopyableCode code="describe_default_q_business_application" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-aws_account_id"><code>aws_account_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-namespace"><code>namespace</code></a></td>
    <td>Describes a Amazon Q Business application that is linked to an Quick Sight account.</td>
</tr>
<tr>
    <td><a href="#update_default_q_business_application"><CopyableCode code="update_default_q_business_application" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-aws_account_id"><code>aws_account_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ApplicationId"><code>ApplicationId</code></a></td>
    <td><a href="#parameter-namespace"><code>namespace</code></a></td>
    <td>Updates a Amazon Q Business application that is linked to a Quick Sight account.</td>
</tr>
<tr>
    <td><a href="#delete_default_q_business_application"><CopyableCode code="delete_default_q_business_application" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-aws_account_id"><code>aws_account_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-namespace"><code>namespace</code></a></td>
    <td>Deletes a linked Amazon Q Business application from an Quick Sight account</td>
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
<tr id="parameter-aws_account_id">
    <td><CopyableCode code="aws_account_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the Quick Sight account that you want to disconnect from a Amazon Q Business application.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-namespace">
    <td><CopyableCode code="namespace" /></td>
    <td><code>string</code></td>
    <td>The Quick Sight namespace that you want to delete a linked Amazon Q Business application from. If this field is left blank, the Amazon Q Business application is deleted from the default namespace. Currently, the default namespace is the only valid value for this parameter.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_default_q_business_application"
    values={[
        { label: 'describe_default_q_business_application', value: 'describe_default_q_business_application' }
    ]}
>
<TabItem value="describe_default_q_business_application">

Describes a Amazon Q Business application that is linked to an Quick Sight account.

```sql
SELECT
application_id,
request_id,
status
FROM aws.quicksight.default_q_business_applications
WHERE aws_account_id = '{{ aws_account_id }}' -- required
AND region = '{{ region }}' -- required
AND namespace = '{{ namespace }}'
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_default_q_business_application"
    values={[
        { label: 'update_default_q_business_application', value: 'update_default_q_business_application' }
    ]}
>
<TabItem value="update_default_q_business_application">

Updates a Amazon Q Business application that is linked to a Quick Sight account.

```sql
UPDATE aws.quicksight.default_q_business_applications
SET 
ApplicationId = '{{ ApplicationId }}'
WHERE 
aws_account_id = '{{ aws_account_id }}' --required
AND region = '{{ region }}' --required
AND ApplicationId = '{{ ApplicationId }}' --required
AND namespace = '{{ namespace}}'
RETURNING
request_id,
status;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_default_q_business_application"
    values={[
        { label: 'delete_default_q_business_application', value: 'delete_default_q_business_application' }
    ]}
>
<TabItem value="delete_default_q_business_application">

Deletes a linked Amazon Q Business application from an Quick Sight account

```sql
DELETE FROM aws.quicksight.default_q_business_applications
WHERE aws_account_id = '{{ aws_account_id }}' --required
AND region = '{{ region }}' --required
AND namespace = '{{ namespace }}'
;
```
</TabItem>
</Tabs>
