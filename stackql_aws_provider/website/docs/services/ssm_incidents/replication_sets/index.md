--- 
title: replication_sets
hide_title: false
hide_table_of_contents: false
keywords:
  - replication_sets
  - ssm_incidents
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

Creates, updates, deletes, gets or lists a <code>replication_sets</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="replication_sets" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ssm_incidents.replication_sets" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_replication_set"
    values={[
        { label: 'get_replication_set', value: 'get_replication_set' },
        { label: 'list_replication_sets', value: 'list_replication_sets' }
    ]}
>
<TabItem value="get_replication_set">

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
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the replication set. (pattern: &lt;code&gt;^arn:aws(-cn|-us-gov)?:&#91;a-z0-9-&#93;*:&#91;a-z0-9-&#93;*:(&#91;0-9&#93;&#123;12&#125;)?:.+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="createdBy" /></td>
    <td><code>string</code></td>
    <td>Details about who created the replication set. (pattern: &lt;code&gt;^arn:aws(-cn|-us-gov)?:&#91;a-z0-9-&#93;*:&#91;a-z0-9-&#93;*:(&#91;0-9&#93;&#123;12&#125;)?:.+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="createdTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>When the replication set was created.</td>
</tr>
<tr>
    <td><CopyableCode code="deletionProtected" /></td>
    <td><code>boolean</code></td>
    <td>Determines if the replication set deletion protection is enabled or not. If deletion protection is enabled, you can't delete the last Amazon Web Services Region in the replication set.</td>
</tr>
<tr>
    <td><CopyableCode code="lastModifiedBy" /></td>
    <td><code>string</code></td>
    <td>Who last modified the replication set. (pattern: &lt;code&gt;^arn:aws(-cn|-us-gov)?:&#91;a-z0-9-&#93;*:&#91;a-z0-9-&#93;*:(&#91;0-9&#93;&#123;12&#125;)?:.+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="lastModifiedTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>When the replication set was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="regionMap" /></td>
    <td><code>object</code></td>
    <td>The map between each Amazon Web Services Region in your replication set and the KMS key that's used to encrypt the data in that Region.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the replication set. If the replication set is still pending, you can't use Incident Manager functionality. (ACTIVE, CREATING, UPDATING, DELETING, FAILED)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_replication_sets">

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
    <td><CopyableCode code="replication_set_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the list replication set.</td>
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
    <td><a href="#get_replication_set"><CopyableCode code="get_replication_set" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-arn"><code>arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieve your Incident Manager replication set.</td>
</tr>
<tr>
    <td><a href="#list_replication_sets"><CopyableCode code="list_replication_sets" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists details about the replication set configured in your account.</td>
</tr>
<tr>
    <td><a href="#create_replication_set"><CopyableCode code="create_replication_set" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-regions"><code>regions</code></a></td>
    <td></td>
    <td>A replication set replicates and encrypts your data to the provided Regions with the provided KMS key.</td>
</tr>
<tr>
    <td><a href="#update_replication_set"><CopyableCode code="update_replication_set" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-actions"><code>actions</code></a>, <a href="#parameter-arn"><code>arn</code></a></td>
    <td></td>
    <td>Add or delete Regions from your replication set.</td>
</tr>
<tr>
    <td><a href="#delete_replication_set"><CopyableCode code="delete_replication_set" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-arn"><code>arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes all Regions in your replication set. Deleting the replication set deletes all Incident Manager data.</td>
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
<tr id="parameter-arn">
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the replication set you're deleting.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_replication_set"
    values={[
        { label: 'get_replication_set', value: 'get_replication_set' },
        { label: 'list_replication_sets', value: 'list_replication_sets' }
    ]}
>
<TabItem value="get_replication_set">

Retrieve your Incident Manager replication set.

```sql
SELECT
arn,
createdBy,
createdTime,
deletionProtected,
lastModifiedBy,
lastModifiedTime,
regionMap,
status
FROM aws.ssm_incidents.replication_sets
WHERE arn = '{{ arn }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_replication_sets">

Lists details about the replication set configured in your account.

```sql
SELECT
replication_set_arn
FROM aws.ssm_incidents.replication_sets
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_replication_set"
    values={[
        { label: 'create_replication_set', value: 'create_replication_set' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_replication_set">

A replication set replicates and encrypts your data to the provided Regions with the provided KMS key.

```sql
INSERT INTO aws.ssm_incidents.replication_sets (
clientToken,
regions,
tags,
region
)
SELECT 
'{{ clientToken }}',
'{{ regions }}' /* required */,
'{{ tags }}',
'{{ region }}'
RETURNING
arn
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: replication_sets
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the replication_sets resource.
    - name: clientToken
      value: "{{ clientToken }}"
    - name: regions
      value: "{{ regions }}"
    - name: tags
      value: "{{ tags }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_replication_set"
    values={[
        { label: 'update_replication_set', value: 'update_replication_set' }
    ]}
>
<TabItem value="update_replication_set">

Add or delete Regions from your replication set.

```sql
UPDATE aws.ssm_incidents.replication_sets
SET 
actions = '{{ actions }}',
arn = '{{ arn }}',
clientToken = '{{ clientToken }}'
WHERE 
region = '{{ region }}' --required
AND actions = '{{ actions }}' --required
AND arn = '{{ arn }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_replication_set"
    values={[
        { label: 'delete_replication_set', value: 'delete_replication_set' }
    ]}
>
<TabItem value="delete_replication_set">

Deletes all Regions in your replication set. Deleting the replication set deletes all Incident Manager data.

```sql
DELETE FROM aws.ssm_incidents.replication_sets
WHERE arn = '{{ arn }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
