--- 
title: lenses
hide_title: false
hide_table_of_contents: false
keywords:
  - lenses
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

Creates, updates, deletes, gets or lists a <code>lenses</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="lenses" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.wellarchitected.lenses" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_lens"
    values={[
        { label: 'get_lens', value: 'get_lens' },
        { label: 'list_lenses', value: 'list_lenses' }
    ]}
>
<TabItem value="get_lens">

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
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the lens.</td>
</tr>
<tr>
    <td><CopyableCode code="lens_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of a lens.</td>
</tr>
<tr>
    <td><CopyableCode code="lens_version" /></td>
    <td><code>string</code></td>
    <td>The version of a lens.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The full name of the lens.</td>
</tr>
<tr>
    <td><CopyableCode code="owner" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services account ID that owns the lens.</td>
</tr>
<tr>
    <td><CopyableCode code="share_invitation_id" /></td>
    <td><code>string</code></td>
    <td>The ID assigned to the share invitation. (pattern: &lt;code&gt;&#91;0-9a-f&#93;&#123;32&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>The tags assigned to the lens.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_lenses">

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
    <td><CopyableCode code="lens_summaries" /></td>
    <td><code>array</code></td>
    <td>List of lens summaries of available lenses.</td>
</tr>
<tr>
    <td><CopyableCode code="next_token" /></td>
    <td><code>string</code></td>
    <td>The token to use to retrieve the next set of results. (pattern: &lt;code&gt;&#91;A-Za-z0-9+\/=_-&#93;+&lt;/code&gt;)</td>
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
    <td><a href="#get_lens"><CopyableCode code="get_lens" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-lens_alias"><code>lens_alias</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-LensVersion"><code>LensVersion</code></a></td>
    <td>Get an existing lens.</td>
</tr>
<tr>
    <td><a href="#list_lenses"><CopyableCode code="list_lenses" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-NextToken"><code>NextToken</code></a>, <a href="#parameter-MaxResults"><code>MaxResults</code></a>, <a href="#parameter-LensType"><code>LensType</code></a>, <a href="#parameter-LensStatus"><code>LensStatus</code></a>, <a href="#parameter-LensName"><code>LensName</code></a></td>
    <td>List the available lenses.</td>
</tr>
<tr>
    <td><a href="#create_lens_version"><CopyableCode code="create_lens_version" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-lens_alias"><code>lens_alias</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-LensVersion"><code>LensVersion</code></a>, <a href="#parameter-ClientRequestToken"><code>ClientRequestToken</code></a></td>
    <td></td>
    <td>Create a new lens version. A lens can have up to 100 versions. Use this operation to publish a new lens version after you have imported a lens. The LensAlias is used to identify the lens to be published. The owner of a lens can share the lens with other Amazon Web Services accounts and users in the same Amazon Web Services Region. Only the owner of a lens can delete it.</td>
</tr>
<tr>
    <td><a href="#associate_lenses"><CopyableCode code="associate_lenses" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-workload_id"><code>workload_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-LensAliases"><code>LensAliases</code></a></td>
    <td></td>
    <td>Associate a lens to a workload. Up to 10 lenses can be associated with a workload in a single API operation. A maximum of 20 lenses can be associated with a workload. Disclaimer By accessing and/or applying custom lenses created by another Amazon Web Services user or account, you acknowledge that custom lenses created by other users and shared with you are Third Party Content as defined in the Amazon Web Services Customer Agreement.</td>
</tr>
<tr>
    <td><a href="#delete_lens"><CopyableCode code="delete_lens" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-lens_alias"><code>lens_alias</code></a>, <a href="#parameter-ClientRequestToken"><code>ClientRequestToken</code></a>, <a href="#parameter-LensStatus"><code>LensStatus</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Delete an existing lens. Only the owner of a lens can delete it. After the lens is deleted, Amazon Web Services accounts and users that you shared the lens with can continue to use it, but they will no longer be able to apply it to new workloads. Disclaimer By sharing your custom lenses with other Amazon Web Services accounts, you acknowledge that Amazon Web Services will make your custom lenses available to those other accounts. Those other accounts may continue to access and use your shared custom lenses even if you delete the custom lenses from your own Amazon Web Services account or terminate your Amazon Web Services account.</td>
</tr>
<tr>
    <td><a href="#disassociate_lenses"><CopyableCode code="disassociate_lenses" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-workload_id"><code>workload_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-LensAliases"><code>LensAliases</code></a></td>
    <td></td>
    <td>Disassociate a lens from a workload. Up to 10 lenses can be disassociated from a workload in a single API operation. The Amazon Web Services Well-Architected Framework lens (wellarchitected) cannot be removed from a workload.</td>
</tr>
<tr>
    <td><a href="#export_lens"><CopyableCode code="export_lens" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-lens_alias"><code>lens_alias</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-LensVersion"><code>LensVersion</code></a></td>
    <td>Export an existing lens. Only the owner of a lens can export it. Lenses provided by Amazon Web Services (Amazon Web Services Official Content) cannot be exported. Lenses are defined in JSON. For more information, see JSON format specification in the Well-Architected Tool User Guide. Disclaimer Do not include or gather personal identifiable information (PII) of end users or other identifiable individuals in or via your custom lenses. If your custom lens or those shared with you and used in your account do include or collect PII you are responsible for: ensuring that the included PII is processed in accordance with applicable law, providing adequate privacy notices, and obtaining necessary consents for processing such data.</td>
</tr>
<tr>
    <td><a href="#import_lens"><CopyableCode code="import_lens" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-JSONString"><code>JSONString</code></a>, <a href="#parameter-ClientRequestToken"><code>ClientRequestToken</code></a></td>
    <td></td>
    <td>Import a new custom lens or update an existing custom lens. To update an existing custom lens, specify its ARN as the LensAlias. If no ARN is specified, a new custom lens is created. The new or updated lens will have a status of DRAFT. The lens cannot be applied to workloads or shared with other Amazon Web Services accounts until it's published with CreateLensVersion. Lenses are defined in JSON. For more information, see JSON format specification in the Well-Architected Tool User Guide. A custom lens cannot exceed 500 KB in size. Disclaimer Do not include or gather personal identifiable information (PII) of end users or other identifiable individuals in or via your custom lenses. If your custom lens or those shared with you and used in your account do include or collect PII you are responsible for: ensuring that the included PII is processed in accordance with applicable law, providing adequate privacy notices, and obtaining necessary consents for processing such data.</td>
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
<tr id="parameter-LensStatus">
    <td><CopyableCode code="LensStatus" /></td>
    <td><code>string</code></td>
    <td>The status of the lens to be deleted.</td>
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
<tr id="parameter-workload_id">
    <td><CopyableCode code="workload_id" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-LensName">
    <td><CopyableCode code="LensName" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-LensStatus">
    <td><CopyableCode code="LensStatus" /></td>
    <td><code>string</code></td>
    <td>The status of lenses to be returned.</td>
</tr>
<tr id="parameter-LensType">
    <td><CopyableCode code="LensType" /></td>
    <td><code>string</code></td>
    <td>The type of lenses to be returned.</td>
</tr>
<tr id="parameter-LensVersion">
    <td><CopyableCode code="LensVersion" /></td>
    <td><code>string</code></td>
    <td>The lens version to be exported.</td>
</tr>
<tr id="parameter-MaxResults">
    <td><CopyableCode code="MaxResults" /></td>
    <td><code>integer</code></td>
    <td></td>
</tr>
<tr id="parameter-NextToken">
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_lens"
    values={[
        { label: 'get_lens', value: 'get_lens' },
        { label: 'list_lenses', value: 'list_lenses' }
    ]}
>
<TabItem value="get_lens">

Get an existing lens.

```sql
SELECT
description,
lens_arn,
lens_version,
name,
owner,
share_invitation_id,
tags
FROM aws.wellarchitected.lenses
WHERE lens_alias = '{{ lens_alias }}' -- required
AND region = '{{ region }}' -- required
AND LensVersion = '{{ LensVersion }}'
;
```
</TabItem>
<TabItem value="list_lenses">

List the available lenses.

```sql
SELECT
lens_summaries,
next_token
FROM aws.wellarchitected.lenses
WHERE region = '{{ region }}' -- required
AND NextToken = '{{ NextToken }}'
AND MaxResults = '{{ MaxResults }}'
AND LensType = '{{ LensType }}'
AND LensStatus = '{{ LensStatus }}'
AND LensName = '{{ LensName }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_lens_version"
    values={[
        { label: 'create_lens_version', value: 'create_lens_version' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_lens_version">

Create a new lens version. A lens can have up to 100 versions. Use this operation to publish a new lens version after you have imported a lens. The LensAlias is used to identify the lens to be published. The owner of a lens can share the lens with other Amazon Web Services accounts and users in the same Amazon Web Services Region. Only the owner of a lens can delete it.

```sql
INSERT INTO aws.wellarchitected.lenses (
LensVersion,
IsMajorVersion,
ClientRequestToken,
lens_alias,
region
)
SELECT 
'{{ LensVersion }}' /* required */,
{{ IsMajorVersion }},
'{{ ClientRequestToken }}' /* required */,
'{{ lens_alias }}',
'{{ region }}'
RETURNING
lens_arn,
lens_version
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: lenses
  props:
    - name: lens_alias
      value: "{{ lens_alias }}"
      description: Required parameter for the lenses resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the lenses resource.
    - name: LensVersion
      value: "{{ LensVersion }}"
    - name: IsMajorVersion
      value: {{ IsMajorVersion }}
    - name: ClientRequestToken
      value: "{{ ClientRequestToken }}"
      description: |
        A unique case-sensitive string used to ensure that this request is idempotent (executes only once). You should not reuse the same token for other requests. If you retry a request with the same client request token and the same parameters after the original request has completed successfully, the result of the original request is returned. This token is listed as required, however, if you do not specify it, the Amazon Web Services SDKs automatically generate one for you. If you are not using the Amazon Web Services SDK or the CLI, you must provide this token or the request will fail.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="associate_lenses"
    values={[
        { label: 'associate_lenses', value: 'associate_lenses' }
    ]}
>
<TabItem value="associate_lenses">

Associate a lens to a workload. Up to 10 lenses can be associated with a workload in a single API operation. A maximum of 20 lenses can be associated with a workload. Disclaimer By accessing and/or applying custom lenses created by another Amazon Web Services user or account, you acknowledge that custom lenses created by other users and shared with you are Third Party Content as defined in the Amazon Web Services Customer Agreement.

```sql
UPDATE aws.wellarchitected.lenses
SET 
LensAliases = '{{ LensAliases }}'
WHERE 
workload_id = '{{ workload_id }}' --required
AND region = '{{ region }}' --required
AND LensAliases = '{{ LensAliases }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_lens"
    values={[
        { label: 'delete_lens', value: 'delete_lens' }
    ]}
>
<TabItem value="delete_lens">

Delete an existing lens. Only the owner of a lens can delete it. After the lens is deleted, Amazon Web Services accounts and users that you shared the lens with can continue to use it, but they will no longer be able to apply it to new workloads. Disclaimer By sharing your custom lenses with other Amazon Web Services accounts, you acknowledge that Amazon Web Services will make your custom lenses available to those other accounts. Those other accounts may continue to access and use your shared custom lenses even if you delete the custom lenses from your own Amazon Web Services account or terminate your Amazon Web Services account.

```sql
DELETE FROM aws.wellarchitected.lenses
WHERE lens_alias = '{{ lens_alias }}' --required
AND ClientRequestToken = '{{ ClientRequestToken }}' --required
AND LensStatus = '{{ LensStatus }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="disassociate_lenses"
    values={[
        { label: 'disassociate_lenses', value: 'disassociate_lenses' },
        { label: 'export_lens', value: 'export_lens' },
        { label: 'import_lens', value: 'import_lens' }
    ]}
>
<TabItem value="disassociate_lenses">

Disassociate a lens from a workload. Up to 10 lenses can be disassociated from a workload in a single API operation. The Amazon Web Services Well-Architected Framework lens (wellarchitected) cannot be removed from a workload.

```sql
EXEC aws.wellarchitected.lenses.disassociate_lenses 
@workload_id='{{ workload_id }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"LensAliases": "{{ LensAliases }}"
}'
;
```
</TabItem>
<TabItem value="export_lens">

Export an existing lens. Only the owner of a lens can export it. Lenses provided by Amazon Web Services (Amazon Web Services Official Content) cannot be exported. Lenses are defined in JSON. For more information, see JSON format specification in the Well-Architected Tool User Guide. Disclaimer Do not include or gather personal identifiable information (PII) of end users or other identifiable individuals in or via your custom lenses. If your custom lens or those shared with you and used in your account do include or collect PII you are responsible for: ensuring that the included PII is processed in accordance with applicable law, providing adequate privacy notices, and obtaining necessary consents for processing such data.

```sql
EXEC aws.wellarchitected.lenses.export_lens 
@lens_alias='{{ lens_alias }}' --required, 
@region='{{ region }}' --required, 
@LensVersion='{{ LensVersion }}'
;
```
</TabItem>
<TabItem value="import_lens">

Import a new custom lens or update an existing custom lens. To update an existing custom lens, specify its ARN as the LensAlias. If no ARN is specified, a new custom lens is created. The new or updated lens will have a status of DRAFT. The lens cannot be applied to workloads or shared with other Amazon Web Services accounts until it's published with CreateLensVersion. Lenses are defined in JSON. For more information, see JSON format specification in the Well-Architected Tool User Guide. A custom lens cannot exceed 500 KB in size. Disclaimer Do not include or gather personal identifiable information (PII) of end users or other identifiable individuals in or via your custom lenses. If your custom lens or those shared with you and used in your account do include or collect PII you are responsible for: ensuring that the included PII is processed in accordance with applicable law, providing adequate privacy notices, and obtaining necessary consents for processing such data.

```sql
EXEC aws.wellarchitected.lenses.import_lens 
@region='{{ region }}' --required 
@@json=
'{
"LensAlias": "{{ LensAlias }}", 
"JSONString": "{{ JSONString }}", 
"ClientRequestToken": "{{ ClientRequestToken }}", 
"Tags": "{{ Tags }}"
}'
;
```
</TabItem>
</Tabs>
