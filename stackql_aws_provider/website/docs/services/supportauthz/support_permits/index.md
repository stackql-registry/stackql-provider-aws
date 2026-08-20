--- 
title: support_permits
hide_title: false
hide_table_of_contents: false
keywords:
  - support_permits
  - supportauthz
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

Creates, updates, deletes, gets or lists a <code>support_permits</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="support_permits" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.supportauthz.support_permits" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_support_permit"
    values={[
        { label: 'get_support_permit', value: 'get_support_permit' },
        { label: 'list_support_permits', value: 'list_support_permits' }
    ]}
>
<TabItem value="get_support_permit">

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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the support permit. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;&#123;1,256&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the support permit. (pattern: &lt;code&gt;arn:&#91;a-z0-9-&#93;+:&#91;a-z0-9-&#93;+:&#91;a-z0-9-&#93;*:&#91;0-9&#93;&#123;12&#125;:.+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the permit was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the support permit.</td>
</tr>
<tr>
    <td><CopyableCode code="permit" /></td>
    <td><code>object</code></td>
    <td>The permit definition specifying the authorized actions, resources, and time-window conditions for a support operator.</td>
</tr>
<tr>
    <td><CopyableCode code="signing_key_info" /></td>
    <td><code>object</code></td>
    <td>The signing key used to cryptographically sign a support permit.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of a support permit. (ACTIVE, INACTIVE, DELETING)</td>
</tr>
<tr>
    <td><CopyableCode code="support_case_display_id" /></td>
    <td><code>string</code></td>
    <td>The display identifier of the support case associated with the permit. (pattern: &lt;code&gt;&#91;a-zA-Z0-9:/-&#93;&#123;1,512&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>The tags associated with the support permit.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_support_permits">

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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the support permit. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;&#123;1,256&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the support permit. (pattern: &lt;code&gt;arn:&#91;a-z0-9-&#93;+:&#91;a-z0-9-&#93;+:&#91;a-z0-9-&#93;*:&#91;0-9&#93;&#123;12&#125;:.+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the permit was created.</td>
</tr>
<tr>
    <td><CopyableCode code="permit" /></td>
    <td><code>object</code></td>
    <td>The permit definition specifying the authorized actions, resources, and time-window conditions for a support operator.</td>
</tr>
<tr>
    <td><CopyableCode code="signing_key_info" /></td>
    <td><code>object</code></td>
    <td>The signing key used to cryptographically sign a support permit.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of a support permit. (ACTIVE, INACTIVE, DELETING)</td>
</tr>
<tr>
    <td><CopyableCode code="support_case_display_id" /></td>
    <td><code>string</code></td>
    <td>The display identifier of the support case associated with the permit. (pattern: &lt;code&gt;&#91;a-zA-Z0-9:/-&#93;&#123;1,512&#125;&lt;/code&gt;)</td>
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
    <td><a href="#get_support_permit"><CopyableCode code="get_support_permit" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-support_permit_identifier"><code>support_permit_identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves the details of a support permit by its ARN or name.</td>
</tr>
<tr>
    <td><a href="#list_support_permits"><CopyableCode code="list_support_permits" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-supportPermitStatuses"><code>supportPermitStatuses</code></a></td>
    <td>Lists all support permits in the caller's account. Use pagination to ensure that the operation returns quickly and successfully.</td>
</tr>
<tr>
    <td><a href="#create_support_permit"><CopyableCode code="create_support_permit" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-permit"><code>permit</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-signingKeyInfo"><code>signingKeyInfo</code></a></td>
    <td></td>
    <td>Creates a support permit that authorizes an AWS support operator to perform specified actions on specified resources. The permit is cryptographically signed using a customer-managed AWS KMS key (ECC_NIST_P384, SIGN_VERIFY) to ensure non-repudiation.</td>
</tr>
<tr>
    <td><a href="#delete_support_permit"><CopyableCode code="delete_support_permit" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-support_permit_identifier"><code>support_permit_identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a support permit, revoking the authorization previously granted to the AWS support operator.</td>
</tr>
<tr>
    <td><a href="#reject_support_permit_request"><CopyableCode code="reject_support_permit_request" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-request_arn"><code>request_arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Rejects a permit request from an AWS support operator. The operator cannot proceed with the requested action.</td>
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
<tr id="parameter-request_arn">
    <td><CopyableCode code="request_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the permit request to reject.</td>
</tr>
<tr id="parameter-support_permit_identifier">
    <td><CopyableCode code="support_permit_identifier" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) or name of the support permit to delete.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return in a single call. Valid range is 1 to 100.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The token for the next page of results.</td>
</tr>
<tr id="parameter-supportPermitStatuses">
    <td><CopyableCode code="supportPermitStatuses" /></td>
    <td><code>array</code></td>
    <td>Filters the results by support permit status. Valid values: ACTIVE, INACTIVE, DELETING.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_support_permit"
    values={[
        { label: 'get_support_permit', value: 'get_support_permit' },
        { label: 'list_support_permits', value: 'list_support_permits' }
    ]}
>
<TabItem value="get_support_permit">

Retrieves the details of a support permit by its ARN or name.

```sql
SELECT
name,
arn,
created_at,
description,
permit,
signing_key_info,
status,
support_case_display_id,
tags
FROM aws.supportauthz.support_permits
WHERE support_permit_identifier = '{{ support_permit_identifier }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_support_permits">

Lists all support permits in the caller's account. Use pagination to ensure that the operation returns quickly and successfully.

```sql
SELECT
name,
arn,
created_at,
permit,
signing_key_info,
status,
support_case_display_id
FROM aws.supportauthz.support_permits
WHERE region = '{{ region }}' -- required
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
AND supportPermitStatuses = '{{ supportPermitStatuses }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_support_permit"
    values={[
        { label: 'create_support_permit', value: 'create_support_permit' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_support_permit">

Creates a support permit that authorizes an AWS support operator to perform specified actions on specified resources. The permit is cryptographically signed using a customer-managed AWS KMS key (ECC_NIST_P384, SIGN_VERIFY) to ensure non-repudiation.

```sql
INSERT INTO aws.supportauthz.support_permits (
permit,
name,
description,
signingKeyInfo,
supportCaseDisplayId,
clientToken,
tags,
region
)
SELECT 
'{{ permit }}' /* required */,
'{{ name }}' /* required */,
'{{ description }}',
'{{ signingKeyInfo }}' /* required */,
'{{ supportCaseDisplayId }}',
'{{ clientToken }}',
'{{ tags }}',
'{{ region }}'
RETURNING
name,
arn,
created_at,
description,
permit,
signing_key_info,
status,
support_case_display_id,
tags
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: support_permits
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the support_permits resource.
    - name: permit
      description: |
        The permit definition specifying the authorized actions, resources, and time-window conditions for a support operator.
      value:
        actions:
          allActions: "{{ allActions }}"
          actions:
            - "{{ actions }}"
        resources:
          allResourcesInRegion: "{{ allResourcesInRegion }}"
          resources:
            - "{{ resources }}"
        conditions:
          - allowAfter: "{{ allowAfter }}"
            allowBefore: "{{ allowBefore }}"
    - name: name
      value: "{{ name }}"
    - name: description
      value: "{{ description }}"
    - name: signingKeyInfo
      description: |
        The signing key used to cryptographically sign a support permit.
      value:
        kmsKey: "{{ kmsKey }}"
    - name: supportCaseDisplayId
      value: "{{ supportCaseDisplayId }}"
    - name: clientToken
      value: "{{ clientToken }}"
    - name: tags
      value: "{{ tags }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_support_permit"
    values={[
        { label: 'delete_support_permit', value: 'delete_support_permit' }
    ]}
>
<TabItem value="delete_support_permit">

Deletes a support permit, revoking the authorization previously granted to the AWS support operator.

```sql
DELETE FROM aws.supportauthz.support_permits
WHERE support_permit_identifier = '{{ support_permit_identifier }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="reject_support_permit_request"
    values={[
        { label: 'reject_support_permit_request', value: 'reject_support_permit_request' }
    ]}
>
<TabItem value="reject_support_permit_request">

Rejects a permit request from an AWS support operator. The operator cannot proceed with the requested action.

```sql
EXEC aws.supportauthz.support_permits.reject_support_permit_request 
@request_arn='{{ request_arn }}' --required, 
@region='{{ region }}' --required
;
```
</TabItem>
</Tabs>
