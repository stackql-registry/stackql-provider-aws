--- 
title: policies
hide_title: false
hide_table_of_contents: false
keywords:
  - policies
  - mediaconvert
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

Creates, updates, deletes, gets or lists a <code>policies</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="policies" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.mediaconvert.policies" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_policy"
    values={[
        { label: 'get_policy', value: 'get_policy' }
    ]}
>
<TabItem value="get_policy">

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
    <td><CopyableCode code="HttpInputs" /></td>
    <td><code>string</code></td>
    <td>Allow or disallow jobs that specify HTTP inputs. (ALLOWED, DISALLOWED)</td>
</tr>
<tr>
    <td><CopyableCode code="HttpsInputs" /></td>
    <td><code>string</code></td>
    <td>Allow or disallow jobs that specify HTTPS inputs. (ALLOWED, DISALLOWED)</td>
</tr>
<tr>
    <td><CopyableCode code="S3Inputs" /></td>
    <td><code>string</code></td>
    <td>Allow or disallow jobs that specify Amazon S3 inputs. (ALLOWED, DISALLOWED)</td>
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
    <td><a href="#get_policy"><CopyableCode code="get_policy" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieve the JSON for your policy.</td>
</tr>
<tr>
    <td><a href="#put_policy"><CopyableCode code="put_policy" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Create or change your policy. For more information about policies, see the user guide at http:​//docs.aws.amazon.com/mediaconvert/latest/ug/what-is.html</td>
</tr>
<tr>
    <td><a href="#delete_policy"><CopyableCode code="delete_policy" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Permanently delete a policy that you created.</td>
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
    defaultValue="get_policy"
    values={[
        { label: 'get_policy', value: 'get_policy' }
    ]}
>
<TabItem value="get_policy">

Retrieve the JSON for your policy.

```sql
SELECT
HttpInputs,
HttpsInputs,
S3Inputs
FROM aws.mediaconvert.policies
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="put_policy"
    values={[
        { label: 'put_policy', value: 'put_policy' }
    ]}
>
<TabItem value="put_policy">

Create or change your policy. For more information about policies, see the user guide at http://docs.aws.amazon.com/mediaconvert/latest/ug/what-is.html

```sql
REPLACE aws.mediaconvert.policies
SET 
Policy = '{{ Policy }}'
WHERE 
region = '{{ region }}' --required
RETURNING
Policy;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_policy"
    values={[
        { label: 'delete_policy', value: 'delete_policy' }
    ]}
>
<TabItem value="delete_policy">

Permanently delete a policy that you created.

```sql
DELETE FROM aws.mediaconvert.policies
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
