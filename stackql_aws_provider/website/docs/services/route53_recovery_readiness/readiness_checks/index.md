--- 
title: readiness_checks
hide_title: false
hide_table_of_contents: false
keywords:
  - readiness_checks
  - route53_recovery_readiness
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

Creates, updates, deletes, gets or lists a <code>readiness_checks</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="readiness_checks" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.route53_recovery_readiness.readiness_checks" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_readiness_check"
    values={[
        { label: 'get_readiness_check', value: 'get_readiness_check' },
        { label: 'list_readiness_checks', value: 'list_readiness_checks' }
    ]}
>
<TabItem value="get_readiness_check">

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
    <td><CopyableCode code="ReadinessCheckArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) associated with a readiness check.</td>
</tr>
<tr>
    <td><CopyableCode code="ReadinessCheckName" /></td>
    <td><code>string</code></td>
    <td>Name of a readiness check. (pattern: &lt;code&gt;\A&#91;a-zA-Z0-9_&#93;+\z&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="ResourceSet" /></td>
    <td><code>string</code></td>
    <td>Name of the resource set to be checked. (pattern: &lt;code&gt;\A&#91;a-zA-Z0-9_&#93;+\z&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Tags" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_readiness_checks">

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
    <td><CopyableCode code="ReadinessCheckArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) associated with a readiness check.</td>
</tr>
<tr>
    <td><CopyableCode code="ReadinessCheckName" /></td>
    <td><code>string</code></td>
    <td>Name of a readiness check. (pattern: &lt;code&gt;\A&#91;a-zA-Z0-9_&#93;+\z&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="ResourceSet" /></td>
    <td><code>string</code></td>
    <td>Name of the resource set to be checked. (pattern: &lt;code&gt;\A&#91;a-zA-Z0-9_&#93;+\z&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Tags" /></td>
    <td><code>object</code></td>
    <td></td>
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
    <td><a href="#get_readiness_check"><CopyableCode code="get_readiness_check" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-readiness_check_name"><code>readiness_check_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets details about a readiness check.</td>
</tr>
<tr>
    <td><a href="#list_readiness_checks"><CopyableCode code="list_readiness_checks" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Lists the readiness checks for an account.</td>
</tr>
<tr>
    <td><a href="#create_readiness_check"><CopyableCode code="create_readiness_check" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ReadinessCheckName"><code>ReadinessCheckName</code></a>, <a href="#parameter-ResourceSetName"><code>ResourceSetName</code></a></td>
    <td></td>
    <td>Creates a readiness check in an account. A readiness check monitors a resource set in your application, such as a set of Amazon Aurora instances, that Application Recovery Controller is auditing recovery readiness for. The audits run once every minute on every resource that's associated with a readiness check.</td>
</tr>
<tr>
    <td><a href="#update_readiness_check"><CopyableCode code="update_readiness_check" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-readiness_check_name"><code>readiness_check_name</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ResourceSetName"><code>ResourceSetName</code></a></td>
    <td></td>
    <td>Updates a readiness check.</td>
</tr>
<tr>
    <td><a href="#delete_readiness_check"><CopyableCode code="delete_readiness_check" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-readiness_check_name"><code>readiness_check_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a readiness check.</td>
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
<tr id="parameter-readiness_check_name">
    <td><CopyableCode code="readiness_check_name" /></td>
    <td><code>string</code></td>
    <td>Name of a readiness check.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The number of objects that you want to return with this call.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The token that identifies which batch of results you want to see.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_readiness_check"
    values={[
        { label: 'get_readiness_check', value: 'get_readiness_check' },
        { label: 'list_readiness_checks', value: 'list_readiness_checks' }
    ]}
>
<TabItem value="get_readiness_check">

Gets details about a readiness check.

```sql
SELECT
ReadinessCheckArn,
ReadinessCheckName,
ResourceSet,
Tags
FROM aws.route53_recovery_readiness.readiness_checks
WHERE readiness_check_name = '{{ readiness_check_name }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_readiness_checks">

Lists the readiness checks for an account.

```sql
SELECT
ReadinessCheckArn,
ReadinessCheckName,
ResourceSet,
Tags
FROM aws.route53_recovery_readiness.readiness_checks
WHERE region = '{{ region }}' -- required
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_readiness_check"
    values={[
        { label: 'create_readiness_check', value: 'create_readiness_check' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_readiness_check">

Creates a readiness check in an account. A readiness check monitors a resource set in your application, such as a set of Amazon Aurora instances, that Application Recovery Controller is auditing recovery readiness for. The audits run once every minute on every resource that's associated with a readiness check.

```sql
INSERT INTO aws.route53_recovery_readiness.readiness_checks (
ReadinessCheckName,
ResourceSetName,
Tags,
region
)
SELECT 
'{{ ReadinessCheckName }}' /* required */,
'{{ ResourceSetName }}' /* required */,
'{{ Tags }}',
'{{ region }}'
RETURNING
ReadinessCheckArn,
ReadinessCheckName,
ResourceSet,
Tags
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: readiness_checks
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the readiness_checks resource.
    - name: ReadinessCheckName
      value: "{{ ReadinessCheckName }}"
    - name: ResourceSetName
      value: "{{ ResourceSetName }}"
    - name: Tags
      value: "{{ Tags }}"
      description: |
        A collection of tags associated with a resource.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_readiness_check"
    values={[
        { label: 'update_readiness_check', value: 'update_readiness_check' }
    ]}
>
<TabItem value="update_readiness_check">

Updates a readiness check.

```sql
UPDATE aws.route53_recovery_readiness.readiness_checks
SET 
ResourceSetName = '{{ ResourceSetName }}'
WHERE 
readiness_check_name = '{{ readiness_check_name }}' --required
AND region = '{{ region }}' --required
AND ResourceSetName = '{{ ResourceSetName }}' --required
RETURNING
ReadinessCheckArn,
ReadinessCheckName,
ResourceSet,
Tags;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_readiness_check"
    values={[
        { label: 'delete_readiness_check', value: 'delete_readiness_check' }
    ]}
>
<TabItem value="delete_readiness_check">

Deletes a readiness check.

```sql
DELETE FROM aws.route53_recovery_readiness.readiness_checks
WHERE readiness_check_name = '{{ readiness_check_name }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
