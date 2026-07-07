--- 
title: profile_shares
hide_title: false
hide_table_of_contents: false
keywords:
  - profile_shares
  - wellarchitected
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

Creates, updates, deletes, gets or lists a <code>profile_shares</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="profile_shares" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.wellarchitected.profile_shares" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_profile_shares"
    values={[
        { label: 'list_profile_shares', value: 'list_profile_shares' }
    ]}
>
<TabItem value="list_profile_shares">

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
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>The token to use to retrieve the next set of results.</td>
</tr>
<tr>
    <td><CopyableCode code="ProfileShareSummaries" /></td>
    <td><code>array</code></td>
    <td>Profile share summaries.</td>
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
    <td><a href="#list_profile_shares"><CopyableCode code="list_profile_shares" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-profile_arn"><code>profile_arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-SharedWithPrefix"><code>SharedWithPrefix</code></a>, <a href="#parameter-NextToken"><code>NextToken</code></a>, <a href="#parameter-MaxResults"><code>MaxResults</code></a>, <a href="#parameter-Status"><code>Status</code></a></td>
    <td>List profile shares.</td>
</tr>
<tr>
    <td><a href="#create_profile_share"><CopyableCode code="create_profile_share" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-profile_arn"><code>profile_arn</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-SharedWith"><code>SharedWith</code></a>, <a href="#parameter-ClientRequestToken"><code>ClientRequestToken</code></a></td>
    <td></td>
    <td>Create a profile share.</td>
</tr>
<tr>
    <td><a href="#delete_profile_share"><CopyableCode code="delete_profile_share" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-share_id"><code>share_id</code></a>, <a href="#parameter-profile_arn"><code>profile_arn</code></a>, <a href="#parameter-ClientRequestToken"><code>ClientRequestToken</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Delete a profile share.</td>
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
<tr id="parameter-ClientRequestToken">
    <td><CopyableCode code="ClientRequestToken" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-profile_arn">
    <td><CopyableCode code="profile_arn" /></td>
    <td><code>string</code></td>
    <td>The profile ARN.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-share_id">
    <td><CopyableCode code="share_id" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-MaxResults">
    <td><CopyableCode code="MaxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return for this request.</td>
</tr>
<tr id="parameter-NextToken">
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-SharedWithPrefix">
    <td><CopyableCode code="SharedWithPrefix" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services account ID, organization ID, or organizational unit (OU) ID with which the profile is shared.</td>
</tr>
<tr id="parameter-Status">
    <td><CopyableCode code="Status" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_profile_shares"
    values={[
        { label: 'list_profile_shares', value: 'list_profile_shares' }
    ]}
>
<TabItem value="list_profile_shares">

List profile shares.

```sql
SELECT
NextToken,
ProfileShareSummaries
FROM aws.wellarchitected.profile_shares
WHERE profile_arn = '{{ profile_arn }}' -- required
AND region = '{{ region }}' -- required
AND SharedWithPrefix = '{{ SharedWithPrefix }}'
AND NextToken = '{{ NextToken }}'
AND MaxResults = '{{ MaxResults }}'
AND Status = '{{ Status }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_profile_share"
    values={[
        { label: 'create_profile_share', value: 'create_profile_share' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_profile_share">

Create a profile share.

```sql
INSERT INTO aws.wellarchitected.profile_shares (
SharedWith,
ClientRequestToken,
profile_arn,
region
)
SELECT 
'{{ SharedWith }}' /* required */,
'{{ ClientRequestToken }}' /* required */,
'{{ profile_arn }}',
'{{ region }}'
RETURNING
ProfileArn,
ShareId
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: profile_shares
  props:
    - name: profile_arn
      value: "{{ profile_arn }}"
      description: Required parameter for the profile_shares resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the profile_shares resource.
    - name: SharedWith
      value: "{{ SharedWith }}"
      description: |
        The Amazon Web Services account ID, organization ID, or organizational unit (OU) ID with which the workload, lens, profile, or review template is shared.
    - name: ClientRequestToken
      value: "{{ ClientRequestToken }}"
      description: |
        A unique case-sensitive string used to ensure that this request is idempotent (executes only once). You should not reuse the same token for other requests. If you retry a request with the same client request token and the same parameters after the original request has completed successfully, the result of the original request is returned. This token is listed as required, however, if you do not specify it, the Amazon Web Services SDKs automatically generate one for you. If you are not using the Amazon Web Services SDK or the CLI, you must provide this token or the request will fail.
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_profile_share"
    values={[
        { label: 'delete_profile_share', value: 'delete_profile_share' }
    ]}
>
<TabItem value="delete_profile_share">

Delete a profile share.

```sql
DELETE FROM aws.wellarchitected.profile_shares
WHERE share_id = '{{ share_id }}' --required
AND profile_arn = '{{ profile_arn }}' --required
AND ClientRequestToken = '{{ ClientRequestToken }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
