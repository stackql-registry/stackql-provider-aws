--- 
title: account_aliases
hide_title: false
hide_table_of_contents: false
keywords:
  - account_aliases
  - iam
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

Creates, updates, deletes, gets or lists an <code>account_aliases</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="account_aliases" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.iam.account_aliases" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_account_aliases"
    values={[
        { label: 'list_account_aliases', value: 'list_account_aliases' }
    ]}
>
<TabItem value="list_account_aliases">

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
    <td><CopyableCode code="account_alias" /></td>
    <td><code>string</code></td>
    <td>A list of aliases associated with the account. Amazon Web Services supports only one alias per account.</td>
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
    <td><a href="#list_account_aliases"><CopyableCode code="list_account_aliases" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-Marker"><code>Marker</code></a>, <a href="#parameter-MaxItems"><code>MaxItems</code></a></td>
    <td>Lists the account alias associated with the Amazon Web Services account (Note: you can have only one). For information about using an Amazon Web Services account alias, see Creating, deleting, and listing an Amazon Web Services account alias in the IAM User Guide.</td>
</tr>
<tr>
    <td><a href="#create_account_alias"><CopyableCode code="create_account_alias" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-AccountAlias"><code>AccountAlias</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Creates an alias for your Amazon Web Services account. For information about using an Amazon Web Services account alias, see Creating, deleting, and listing an Amazon Web Services account alias in the Amazon Web Services Sign-In User Guide.</td>
</tr>
<tr>
    <td><a href="#delete_account_alias"><CopyableCode code="delete_account_alias" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-AccountAlias"><code>AccountAlias</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the specified Amazon Web Services account alias. For information about using an Amazon Web Services account alias, see Creating, deleting, and listing an Amazon Web Services account alias in the Amazon Web Services Sign-In User Guide.</td>
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
<tr id="parameter-AccountAlias">
    <td><CopyableCode code="AccountAlias" /></td>
    <td><code>string</code></td>
    <td>The name of the account alias to delete. This parameter allows (through its regex pattern) a string of characters consisting of lowercase letters, digits, and dashes. You cannot start or finish with a dash, nor can you have two dashes in a row.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-Marker">
    <td><CopyableCode code="Marker" /></td>
    <td><code>string</code></td>
    <td>Use this parameter only when paginating results and only after you receive a response indicating that the results are truncated. Set it to the value of the Marker element in the response that you received to indicate where the next call should start.</td>
</tr>
<tr id="parameter-MaxItems">
    <td><CopyableCode code="MaxItems" /></td>
    <td><code>integer</code></td>
    <td>Use this only when paginating results to indicate the maximum number of items you want in the response. If additional items exist beyond the maximum you specify, the IsTruncated response element is true. If you do not include this parameter, the number of items defaults to 100. Note that IAM might return fewer results, even when there are more results available. In that case, the IsTruncated response element returns true, and Marker contains a value to include in the subsequent call that tells the service where to continue from.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_account_aliases"
    values={[
        { label: 'list_account_aliases', value: 'list_account_aliases' }
    ]}
>
<TabItem value="list_account_aliases">

Lists the account alias associated with the Amazon Web Services account (Note: you can have only one). For information about using an Amazon Web Services account alias, see Creating, deleting, and listing an Amazon Web Services account alias in the IAM User Guide.

```sql
SELECT
account_alias
FROM aws.iam.account_aliases
WHERE region = '{{ region }}' -- required
AND Marker = '{{ Marker }}'
AND MaxItems = '{{ MaxItems }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_account_alias"
    values={[
        { label: 'create_account_alias', value: 'create_account_alias' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_account_alias">

Creates an alias for your Amazon Web Services account. For information about using an Amazon Web Services account alias, see Creating, deleting, and listing an Amazon Web Services account alias in the Amazon Web Services Sign-In User Guide.

```sql
INSERT INTO aws.iam.account_aliases (
AccountAlias,
region
)
SELECT 
'{{ AccountAlias }}',
'{{ region }}'
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: account_aliases
  props:
    - name: AccountAlias
      value: "{{ AccountAlias }}"
      description: Required parameter for the account_aliases resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the account_aliases resource.
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_account_alias"
    values={[
        { label: 'delete_account_alias', value: 'delete_account_alias' }
    ]}
>
<TabItem value="delete_account_alias">

Deletes the specified Amazon Web Services account alias. For information about using an Amazon Web Services account alias, see Creating, deleting, and listing an Amazon Web Services account alias in the Amazon Web Services Sign-In User Guide.

```sql
DELETE FROM aws.iam.account_aliases
WHERE AccountAlias = '{{ AccountAlias }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
