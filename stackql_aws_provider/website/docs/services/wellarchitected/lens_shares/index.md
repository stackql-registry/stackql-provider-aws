--- 
title: lens_shares
hide_title: false
hide_table_of_contents: false
keywords:
  - lens_shares
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

Creates, updates, deletes, gets or lists a <code>lens_shares</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="lens_shares" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.wellarchitected.lens_shares" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_lens_shares"
    values={[
        { label: 'list_lens_shares', value: 'list_lens_shares' }
    ]}
>
<TabItem value="list_lens_shares">

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
    <td><CopyableCode code="lens_share_summaries" /></td>
    <td><code>array</code></td>
    <td>A list of lens share summaries.</td>
</tr>
<tr>
    <td><CopyableCode code="next_token" /></td>
    <td><code>string</code></td>
    <td>The token to use to retrieve the next set of results.</td>
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
    <td><a href="#list_lens_shares"><CopyableCode code="list_lens_shares" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-lens_alias"><code>lens_alias</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-SharedWithPrefix"><code>SharedWithPrefix</code></a>, <a href="#parameter-NextToken"><code>NextToken</code></a>, <a href="#parameter-MaxResults"><code>MaxResults</code></a>, <a href="#parameter-Status"><code>Status</code></a></td>
    <td>List the lens shares associated with the lens.</td>
</tr>
<tr>
    <td><a href="#create_lens_share"><CopyableCode code="create_lens_share" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-lens_alias"><code>lens_alias</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-SharedWith"><code>SharedWith</code></a>, <a href="#parameter-ClientRequestToken"><code>ClientRequestToken</code></a></td>
    <td></td>
    <td>Create a lens share. The owner of a lens can share it with other Amazon Web Services accounts, users, an organization, and organizational units (OUs) in the same Amazon Web Services Region. Lenses provided by Amazon Web Services (Amazon Web Services Official Content) cannot be shared. Shared access to a lens is not removed until the lens invitation is deleted. If you share a lens with an organization or OU, all accounts in the organization or OU are granted access to the lens. For more information, see Sharing a custom lens in the Well-Architected Tool User Guide. Disclaimer By sharing your custom lenses with other Amazon Web Services accounts, you acknowledge that Amazon Web Services will make your custom lenses available to those other accounts. Those other accounts may continue to access and use your shared custom lenses even if you delete the custom lenses from your own Amazon Web Services account or terminate your Amazon Web Services account.</td>
</tr>
<tr>
    <td><a href="#delete_lens_share"><CopyableCode code="delete_lens_share" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-share_id"><code>share_id</code></a>, <a href="#parameter-lens_alias"><code>lens_alias</code></a>, <a href="#parameter-ClientRequestToken"><code>ClientRequestToken</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Delete a lens share. After the lens share is deleted, Amazon Web Services accounts, users, organizations, and organizational units (OUs) that you shared the lens with can continue to use it, but they will no longer be able to apply it to new workloads. Disclaimer By sharing your custom lenses with other Amazon Web Services accounts, you acknowledge that Amazon Web Services will make your custom lenses available to those other accounts. Those other accounts may continue to access and use your shared custom lenses even if you delete the custom lenses from your own Amazon Web Services account or terminate your Amazon Web Services account.</td>
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
<tr id="parameter-lens_alias">
    <td><CopyableCode code="lens_alias" /></td>
    <td><code>string</code></td>
    <td></td>
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
    <td>The Amazon Web Services account ID, organization ID, or organizational unit (OU) ID with which the lens is shared.</td>
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
    defaultValue="list_lens_shares"
    values={[
        { label: 'list_lens_shares', value: 'list_lens_shares' }
    ]}
>
<TabItem value="list_lens_shares">

List the lens shares associated with the lens.

```sql
SELECT
lens_share_summaries,
next_token
FROM aws.wellarchitected.lens_shares
WHERE lens_alias = '{{ lens_alias }}' -- required
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
    defaultValue="create_lens_share"
    values={[
        { label: 'create_lens_share', value: 'create_lens_share' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_lens_share">

Create a lens share. The owner of a lens can share it with other Amazon Web Services accounts, users, an organization, and organizational units (OUs) in the same Amazon Web Services Region. Lenses provided by Amazon Web Services (Amazon Web Services Official Content) cannot be shared. Shared access to a lens is not removed until the lens invitation is deleted. If you share a lens with an organization or OU, all accounts in the organization or OU are granted access to the lens. For more information, see Sharing a custom lens in the Well-Architected Tool User Guide. Disclaimer By sharing your custom lenses with other Amazon Web Services accounts, you acknowledge that Amazon Web Services will make your custom lenses available to those other accounts. Those other accounts may continue to access and use your shared custom lenses even if you delete the custom lenses from your own Amazon Web Services account or terminate your Amazon Web Services account.

```sql
INSERT INTO aws.wellarchitected.lens_shares (
SharedWith,
ClientRequestToken,
lens_alias,
region
)
SELECT 
'{{ SharedWith }}' /* required */,
'{{ ClientRequestToken }}' /* required */,
'{{ lens_alias }}',
'{{ region }}'
RETURNING
share_id
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: lens_shares
  props:
    - name: lens_alias
      value: "{{ lens_alias }}"
      description: Required parameter for the lens_shares resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the lens_shares resource.
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
    defaultValue="delete_lens_share"
    values={[
        { label: 'delete_lens_share', value: 'delete_lens_share' }
    ]}
>
<TabItem value="delete_lens_share">

Delete a lens share. After the lens share is deleted, Amazon Web Services accounts, users, organizations, and organizational units (OUs) that you shared the lens with can continue to use it, but they will no longer be able to apply it to new workloads. Disclaimer By sharing your custom lenses with other Amazon Web Services accounts, you acknowledge that Amazon Web Services will make your custom lenses available to those other accounts. Those other accounts may continue to access and use your shared custom lenses even if you delete the custom lenses from your own Amazon Web Services account or terminate your Amazon Web Services account.

```sql
DELETE FROM aws.wellarchitected.lens_shares
WHERE share_id = '{{ share_id }}' --required
AND lens_alias = '{{ lens_alias }}' --required
AND ClientRequestToken = '{{ ClientRequestToken }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
