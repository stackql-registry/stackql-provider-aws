--- 
title: identity_sources
hide_title: false
hide_table_of_contents: false
keywords:
  - identity_sources
  - mpa
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

Creates, updates, deletes, gets or lists an <code>identity_sources</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="identity_sources" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.mpa.identity_sources" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_identity_source"
    values={[
        { label: 'get_identity_source', value: 'get_identity_source' },
        { label: 'list_identity_sources', value: 'list_identity_sources' }
    ]}
>
<TabItem value="get_identity_source">

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
    <td><CopyableCode code="creation_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>Timestamp when the identity source was created.</td>
</tr>
<tr>
    <td><CopyableCode code="identity_source_arn" /></td>
    <td><code>string</code></td>
    <td>Amazon Resource Name (ARN) for the identity source.</td>
</tr>
<tr>
    <td><CopyableCode code="identity_source_parameters" /></td>
    <td><code>object</code></td>
    <td>A IdentitySourceParameters object. Contains details for the resource that provides identities to the identity source. For example, an IAM Identity Center instance.</td>
</tr>
<tr>
    <td><CopyableCode code="identity_source_type" /></td>
    <td><code>string</code></td>
    <td>The type of resource that provided identities to the identity source. For example, an IAM Identity Center instance. (IAM_IDENTITY_CENTER)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Status for the identity source. For example, if the identity source is ACTIVE. (CREATING, ACTIVE, DELETING, ERROR)</td>
</tr>
<tr>
    <td><CopyableCode code="status_code" /></td>
    <td><code>string</code></td>
    <td>Status code of the identity source. (ACCESS_DENIED, DELETION_FAILED, IDC_INSTANCE_NOT_FOUND, IDC_INSTANCE_NOT_VALID)</td>
</tr>
<tr>
    <td><CopyableCode code="status_message" /></td>
    <td><code>string</code></td>
    <td>Message describing the status for the identity source.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_identity_sources">

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
    <td><CopyableCode code="creation_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>Timestamp when the identity source was created.</td>
</tr>
<tr>
    <td><CopyableCode code="identity_source_arn" /></td>
    <td><code>string</code></td>
    <td>Amazon Resource Name (ARN) for the identity source.</td>
</tr>
<tr>
    <td><CopyableCode code="identity_source_parameters" /></td>
    <td><code>object</code></td>
    <td>A IdentitySourceParametersForList object. Contains details for the resource that provides identities to the identity source. For example, an IAM Identity Center instance.</td>
</tr>
<tr>
    <td><CopyableCode code="identity_source_type" /></td>
    <td><code>string</code></td>
    <td>The type of resource that provided identities to the identity source. For example, an IAM Identity Center instance. (IAM_IDENTITY_CENTER)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Status for the identity source. For example, if the identity source is ACTIVE. (CREATING, ACTIVE, DELETING, ERROR)</td>
</tr>
<tr>
    <td><CopyableCode code="status_code" /></td>
    <td><code>string</code></td>
    <td>Status code of the identity source. (ACCESS_DENIED, DELETION_FAILED, IDC_INSTANCE_NOT_FOUND, IDC_INSTANCE_NOT_VALID)</td>
</tr>
<tr>
    <td><CopyableCode code="status_message" /></td>
    <td><code>string</code></td>
    <td>Message describing the status for the identity source.</td>
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
    <td><a href="#get_identity_source"><CopyableCode code="get_identity_source" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-identity_source_arn"><code>identity_source_arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns details for an identity source. For more information, see Identity Source in the Multi-party approval User Guide.</td>
</tr>
<tr>
    <td><a href="#list_identity_sources"><CopyableCode code="list_identity_sources" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-MaxResults"><code>MaxResults</code></a>, <a href="#parameter-NextToken"><code>NextToken</code></a></td>
    <td>Returns a list of identity sources. For more information, see Identity Source in the Multi-party approval User Guide.</td>
</tr>
<tr>
    <td><a href="#create_identity_source"><CopyableCode code="create_identity_source" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-IdentitySourceParameters"><code>IdentitySourceParameters</code></a></td>
    <td></td>
    <td>Creates a new identity source. For more information, see Identity Source in the Multi-party approval User Guide.</td>
</tr>
<tr>
    <td><a href="#delete_identity_source"><CopyableCode code="delete_identity_source" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-identity_source_arn"><code>identity_source_arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes an identity source. For more information, see Identity Source in the Multi-party approval User Guide.</td>
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
<tr id="parameter-identity_source_arn">
    <td><CopyableCode code="identity_source_arn" /></td>
    <td><code>string</code></td>
    <td>Amazon Resource Name (ARN) for identity source.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-MaxResults">
    <td><CopyableCode code="MaxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of items to return in the response. If more results exist than the specified MaxResults value, a token is included in the response so that you can retrieve the remaining results.</td>
</tr>
<tr id="parameter-NextToken">
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>If present, indicates that more output is available than is included in the current response. Use this value in the NextToken request parameter in a next call to the operation to get more output. You can repeat this until the NextToken response element returns null.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_identity_source"
    values={[
        { label: 'get_identity_source', value: 'get_identity_source' },
        { label: 'list_identity_sources', value: 'list_identity_sources' }
    ]}
>
<TabItem value="get_identity_source">

Returns details for an identity source. For more information, see Identity Source in the Multi-party approval User Guide.

```sql
SELECT
creation_time,
identity_source_arn,
identity_source_parameters,
identity_source_type,
status,
status_code,
status_message
FROM aws.mpa.identity_sources
WHERE identity_source_arn = '{{ identity_source_arn }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_identity_sources">

Returns a list of identity sources. For more information, see Identity Source in the Multi-party approval User Guide.

```sql
SELECT
creation_time,
identity_source_arn,
identity_source_parameters,
identity_source_type,
status,
status_code,
status_message
FROM aws.mpa.identity_sources
WHERE region = '{{ region }}' -- required
AND MaxResults = '{{ MaxResults }}'
AND NextToken = '{{ NextToken }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_identity_source"
    values={[
        { label: 'create_identity_source', value: 'create_identity_source' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_identity_source">

Creates a new identity source. For more information, see Identity Source in the Multi-party approval User Guide.

```sql
INSERT INTO aws.mpa.identity_sources (
IdentitySourceParameters,
ClientToken,
Tags,
region
)
SELECT 
'{{ IdentitySourceParameters }}' /* required */,
'{{ ClientToken }}',
'{{ Tags }}',
'{{ region }}'
RETURNING
creation_time,
identity_source_arn,
identity_source_type
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: identity_sources
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the identity_sources resource.
    - name: IdentitySourceParameters
      description: |
        Contains details for the resource that provides identities to the identity source. For example, an IAM Identity Center instance.
      value:
        IamIdentityCenter:
          InstanceArn: "{{ InstanceArn }}"
          Region: "{{ Region }}"
    - name: ClientToken
      value: "{{ ClientToken }}"
    - name: Tags
      value: "{{ Tags }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_identity_source"
    values={[
        { label: 'delete_identity_source', value: 'delete_identity_source' }
    ]}
>
<TabItem value="delete_identity_source">

Deletes an identity source. For more information, see Identity Source in the Multi-party approval User Guide.

```sql
DELETE FROM aws.mpa.identity_sources
WHERE identity_source_arn = '{{ identity_source_arn }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
