--- 
title: members
hide_title: false
hide_table_of_contents: false
keywords:
  - members
  - macie2
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

Creates, updates, deletes, gets or lists a <code>members</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="members" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.macie2.members" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_member"
    values={[
        { label: 'get_member', value: 'get_member' },
        { label: 'list_members', value: 'list_members' }
    ]}
>
<TabItem value="get_member">

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
    <td><CopyableCode code="accountId" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services account ID for the account.</td>
</tr>
<tr>
    <td><CopyableCode code="administratorAccountId" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services account ID for the administrator account.</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the account.</td>
</tr>
<tr>
    <td><CopyableCode code="email" /></td>
    <td><code>string</code></td>
    <td>The email address for the account. This value is null if the account is associated with the administrator account through Organizations.</td>
</tr>
<tr>
    <td><CopyableCode code="invitedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time, in UTC and extended ISO 8601 format, when an Amazon Macie membership invitation was last sent to the account. This value is null if a Macie membership invitation hasn't been sent to the account.</td>
</tr>
<tr>
    <td><CopyableCode code="masterAccountId" /></td>
    <td><code>string</code></td>
    <td>(Deprecated) The Amazon Web Services account ID for the administrator account. This property has been replaced by the administratorAccountId property and is retained only for backward compatibility.</td>
</tr>
<tr>
    <td><CopyableCode code="relationshipStatus" /></td>
    <td><code>string</code></td>
    <td>The current status of the relationship between the account and the administrator account. (Enabled, Paused, Invited, Created, Removed, Resigned, EmailVerificationInProgress, EmailVerificationFailed, RegionDisabled, AccountSuspended)</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>A map of key-value pairs that specifies which tags (keys and values) are associated with the account in Amazon Macie.</td>
</tr>
<tr>
    <td><CopyableCode code="updatedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time, in UTC and extended ISO 8601 format, of the most recent change to the status of the relationship between the account and the administrator account.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_members">

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
    <td><CopyableCode code="accountId" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services account ID for the account.</td>
</tr>
<tr>
    <td><CopyableCode code="administratorAccountId" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services account ID for the administrator account.</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the account.</td>
</tr>
<tr>
    <td><CopyableCode code="email" /></td>
    <td><code>string</code></td>
    <td>The email address for the account. This value is null if the account is associated with the administrator account through Organizations.</td>
</tr>
<tr>
    <td><CopyableCode code="invitedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time, in UTC and extended ISO 8601 format, when an Amazon Macie membership invitation was last sent to the account. This value is null if a Macie membership invitation hasn't been sent to the account.</td>
</tr>
<tr>
    <td><CopyableCode code="masterAccountId" /></td>
    <td><code>string</code></td>
    <td>(Deprecated) The Amazon Web Services account ID for the administrator account. This property has been replaced by the administratorAccountId property and is retained only for backward compatibility.</td>
</tr>
<tr>
    <td><CopyableCode code="relationshipStatus" /></td>
    <td><code>string</code></td>
    <td>The current status of the relationship between the account and the administrator account. (Enabled, Paused, Invited, Created, Removed, Resigned, EmailVerificationInProgress, EmailVerificationFailed, RegionDisabled, AccountSuspended)</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>A map of key-value pairs that specifies which tags (keys and values) are associated with the account in Amazon Macie.</td>
</tr>
<tr>
    <td><CopyableCode code="updatedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time, in UTC and extended ISO 8601 format, of the most recent change to the status of the relationship between the account and the administrator account.</td>
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
    <td><a href="#get_member"><CopyableCode code="get_member" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves information about an account that's associated with an Amazon Macie administrator account.</td>
</tr>
<tr>
    <td><a href="#list_members"><CopyableCode code="list_members" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-onlyAssociated"><code>onlyAssociated</code></a></td>
    <td>Retrieves information about the accounts that are associated with an Amazon Macie administrator account.</td>
</tr>
<tr>
    <td><a href="#create_member"><CopyableCode code="create_member" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-account"><code>account</code></a></td>
    <td></td>
    <td>Associates an account with an Amazon Macie administrator account.</td>
</tr>
<tr>
    <td><a href="#update_member_session"><CopyableCode code="update_member_session" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-status"><code>status</code></a></td>
    <td></td>
    <td>Enables an Amazon Macie administrator to suspend or re-enable Macie for a member account.</td>
</tr>
<tr>
    <td><a href="#disassociate_member"><CopyableCode code="disassociate_member" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Disassociates an Amazon Macie administrator account from a member account.</td>
</tr>
<tr>
    <td><a href="#delete_member"><CopyableCode code="delete_member" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the association between an Amazon Macie administrator account and an account.</td>
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
<tr id="parameter-id">
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for the Amazon Macie resource that the request applies to.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of items to include in each page of a paginated response.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The nextToken string that specifies which page of results to return in a paginated response.</td>
</tr>
<tr id="parameter-onlyAssociated">
    <td><CopyableCode code="onlyAssociated" /></td>
    <td><code>string</code></td>
    <td>Specifies which accounts to include in the response, based on the status of an account's relationship with the administrator account. By default, the response includes only current member accounts. To include all accounts, set this value to false.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_member"
    values={[
        { label: 'get_member', value: 'get_member' },
        { label: 'list_members', value: 'list_members' }
    ]}
>
<TabItem value="get_member">

Retrieves information about an account that's associated with an Amazon Macie administrator account.

```sql
SELECT
accountId,
administratorAccountId,
arn,
email,
invitedAt,
masterAccountId,
relationshipStatus,
tags,
updatedAt
FROM aws.macie2.members
WHERE id = '{{ id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_members">

Retrieves information about the accounts that are associated with an Amazon Macie administrator account.

```sql
SELECT
accountId,
administratorAccountId,
arn,
email,
invitedAt,
masterAccountId,
relationshipStatus,
tags,
updatedAt
FROM aws.macie2.members
WHERE region = '{{ region }}' -- required
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
AND onlyAssociated = '{{ onlyAssociated }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_member"
    values={[
        { label: 'create_member', value: 'create_member' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_member">

Associates an account with an Amazon Macie administrator account.

```sql
INSERT INTO aws.macie2.members (
account,
tags,
region
)
SELECT 
'{{ account }}' /* required */,
'{{ tags }}',
'{{ region }}'
RETURNING
arn
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: members
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the members resource.
    - name: account
      description: |
        Specifies the details of an account to associate with an Amazon Macie administrator account.
      value:
        accountId: "{{ accountId }}"
        email: "{{ email }}"
    - name: tags
      value: "{{ tags }}"
      description: |
        A string-to-string map of key-value pairs that specifies the tags (keys and values) for an Amazon Macie resource.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_member_session"
    values={[
        { label: 'update_member_session', value: 'update_member_session' },
        { label: 'disassociate_member', value: 'disassociate_member' }
    ]}
>
<TabItem value="update_member_session">

Enables an Amazon Macie administrator to suspend or re-enable Macie for a member account.

```sql
UPDATE aws.macie2.members
SET 
status = '{{ status }}'
WHERE 
id = '{{ id }}' --required
AND region = '{{ region }}' --required
AND status = '{{ status }}' --required;
```
</TabItem>
<TabItem value="disassociate_member">

Disassociates an Amazon Macie administrator account from a member account.

```sql
UPDATE aws.macie2.members
SET 
-- No updatable properties
WHERE 
id = '{{ id }}' --required
AND region = '{{ region }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_member"
    values={[
        { label: 'delete_member', value: 'delete_member' }
    ]}
>
<TabItem value="delete_member">

Deletes the association between an Amazon Macie administrator account and an account.

```sql
DELETE FROM aws.macie2.members
WHERE id = '{{ id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
