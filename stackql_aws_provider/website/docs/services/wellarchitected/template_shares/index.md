--- 
title: template_shares
hide_title: false
hide_table_of_contents: false
keywords:
  - template_shares
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

Creates, updates, deletes, gets or lists a <code>template_shares</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="template_shares" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.wellarchitected.template_shares" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_template_shares"
    values={[
        { label: 'list_template_shares', value: 'list_template_shares' }
    ]}
>
<TabItem value="list_template_shares">

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
    <td><CopyableCode code="next_token" /></td>
    <td><code>string</code></td>
    <td>The token to use to retrieve the next set of results. (pattern: &lt;code&gt;&#91;A-Za-z0-9+\/=_-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="template_arn" /></td>
    <td><code>string</code></td>
    <td>The review template ARN. (pattern: &lt;code&gt;arn:aws(-us-gov|-iso(-&#91;a-z&#93;)?|-cn)?:wellarchitected:&#91;a-z&#93;&#123;2&#125;(-gov|-iso(&#91;a-z&#93;)?)?-&#91;a-z&#93;+-\d:\d&#123;12&#125;:(review-template)/&#91;a-f0-9&#93;&#123;32&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="template_share_summaries" /></td>
    <td><code>array</code></td>
    <td>A review template share summary return object.</td>
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
    <td><a href="#list_template_shares"><CopyableCode code="list_template_shares" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-template_arn"><code>template_arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-SharedWithPrefix"><code>SharedWithPrefix</code></a>, <a href="#parameter-NextToken"><code>NextToken</code></a>, <a href="#parameter-MaxResults"><code>MaxResults</code></a>, <a href="#parameter-Status"><code>Status</code></a></td>
    <td>List review template shares.</td>
</tr>
<tr>
    <td><a href="#create_template_share"><CopyableCode code="create_template_share" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-template_arn"><code>template_arn</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-SharedWith"><code>SharedWith</code></a>, <a href="#parameter-ClientRequestToken"><code>ClientRequestToken</code></a></td>
    <td></td>
    <td>Create a review template share. The owner of a review template can share it with other Amazon Web Services accounts, users, an organization, and organizational units (OUs) in the same Amazon Web Services Region. Shared access to a review template is not removed until the review template share invitation is deleted. If you share a review template with an organization or OU, all accounts in the organization or OU are granted access to the review template. Disclaimer By sharing your review template with other Amazon Web Services accounts, you acknowledge that Amazon Web Services will make your review template available to those other accounts.</td>
</tr>
<tr>
    <td><a href="#delete_template_share"><CopyableCode code="delete_template_share" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-share_id"><code>share_id</code></a>, <a href="#parameter-template_arn"><code>template_arn</code></a>, <a href="#parameter-ClientRequestToken"><code>ClientRequestToken</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Delete a review template share. After the review template share is deleted, Amazon Web Services accounts, users, organizations, and organizational units (OUs) that you shared the review template with will no longer be able to apply it to new workloads.</td>
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
<tr id="parameter-template_arn">
    <td><CopyableCode code="template_arn" /></td>
    <td><code>string</code></td>
    <td>The review template ARN.</td>
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
    defaultValue="list_template_shares"
    values={[
        { label: 'list_template_shares', value: 'list_template_shares' }
    ]}
>
<TabItem value="list_template_shares">

List review template shares.

```sql
SELECT
next_token,
template_arn,
template_share_summaries
FROM aws.wellarchitected.template_shares
WHERE template_arn = '{{ template_arn }}' -- required
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
    defaultValue="create_template_share"
    values={[
        { label: 'create_template_share', value: 'create_template_share' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_template_share">

Create a review template share. The owner of a review template can share it with other Amazon Web Services accounts, users, an organization, and organizational units (OUs) in the same Amazon Web Services Region. Shared access to a review template is not removed until the review template share invitation is deleted. If you share a review template with an organization or OU, all accounts in the organization or OU are granted access to the review template. Disclaimer By sharing your review template with other Amazon Web Services accounts, you acknowledge that Amazon Web Services will make your review template available to those other accounts.

```sql
INSERT INTO aws.wellarchitected.template_shares (
SharedWith,
ClientRequestToken,
template_arn,
region
)
SELECT 
'{{ SharedWith }}' /* required */,
'{{ ClientRequestToken }}' /* required */,
'{{ template_arn }}',
'{{ region }}'
RETURNING
share_id,
template_arn
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: template_shares
  props:
    - name: template_arn
      value: "{{ template_arn }}"
      description: Required parameter for the template_shares resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the template_shares resource.
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
    defaultValue="delete_template_share"
    values={[
        { label: 'delete_template_share', value: 'delete_template_share' }
    ]}
>
<TabItem value="delete_template_share">

Delete a review template share. After the review template share is deleted, Amazon Web Services accounts, users, organizations, and organizational units (OUs) that you shared the review template with will no longer be able to apply it to new workloads.

```sql
DELETE FROM aws.wellarchitected.template_shares
WHERE share_id = '{{ share_id }}' --required
AND template_arn = '{{ template_arn }}' --required
AND ClientRequestToken = '{{ ClientRequestToken }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
