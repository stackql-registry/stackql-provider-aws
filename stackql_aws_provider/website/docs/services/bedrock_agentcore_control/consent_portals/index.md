--- 
title: consent_portals
hide_title: false
hide_table_of_contents: false
keywords:
  - consent_portals
  - bedrock_agentcore_control
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

Creates, updates, deletes, gets or lists a <code>consent_portals</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="consent_portals" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.bedrock_agentcore_control.consent_portals" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_consent_portal"
    values={[
        { label: 'get_consent_portal', value: 'get_consent_portal' },
        { label: 'list_consent_portals', value: 'list_consent_portals' }
    ]}
>
<TabItem value="get_consent_portal">

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
    <td>The name of the consent portal. (pattern: &lt;code&gt;&#91;a-zA-Z0-9_-&#93;&#123;1,50&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="consent_portal_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the consent portal. (pattern: &lt;code&gt;arn:aws&#91;^:&#93;*:bedrock-agentcore:&#91;a-z0-9-&#93;+:&#91;0-9&#93;&#123;12&#125;:consent-portal/&#91;a-zA-Z0-9\-_&#93;&#123;1,50&#125;-&#91;A-Za-z0-9&#93;&#123;10&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="consent_portal_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the consent portal. (pattern: &lt;code&gt;&#91;a-zA-Z0-9\-_&#93;&#123;1,50&#125;-&#91;A-Za-z0-9&#93;&#123;10&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp for when the consent portal was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the consent portal.</td>
</tr>
<tr>
    <td><CopyableCode code="execution_role_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the IAM role that the consent portal assumes to access the resources defined in its sources. (pattern: &lt;code&gt;arn:aws(-&#91;a-z-&#93;+)?:iam::&#91;0-9&#93;&#123;12&#125;:role/&#91;a-zA-Z0-9+=,.@\-_/&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="idp_config" /></td>
    <td><code>object</code></td>
    <td>The identity provider configuration used to authenticate end users to the consent portal.</td>
</tr>
<tr>
    <td><CopyableCode code="portal_url" /></td>
    <td><code>string</code></td>
    <td>The URL used to access the consent portal.</td>
</tr>
<tr>
    <td><CopyableCode code="sources" /></td>
    <td><code>array</code></td>
    <td>The list of resources served by the consent portal.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current status of the consent portal. (CREATING, ACTIVE, UPDATING, UPDATE_FAILED, DELETING, FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="status_reason" /></td>
    <td><code>string</code></td>
    <td>A message that provides additional information about the current status of the consent portal.</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp for when the consent portal was last updated.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_consent_portals">

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
    <td>The name of the consent portal. (pattern: &lt;code&gt;&#91;a-zA-Z0-9_-&#93;&#123;1,50&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="consent_portal_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the consent portal. (pattern: &lt;code&gt;arn:aws&#91;^:&#93;*:bedrock-agentcore:&#91;a-z0-9-&#93;+:&#91;0-9&#93;&#123;12&#125;:consent-portal/&#91;a-zA-Z0-9\-_&#93;&#123;1,50&#125;-&#91;A-Za-z0-9&#93;&#123;10&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="consent_portal_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the consent portal. (pattern: &lt;code&gt;&#91;a-zA-Z0-9\-_&#93;&#123;1,50&#125;-&#91;A-Za-z0-9&#93;&#123;10&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp for when the consent portal was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the consent portal.</td>
</tr>
<tr>
    <td><CopyableCode code="portal_url" /></td>
    <td><code>string</code></td>
    <td>The URL used to access the consent portal.</td>
</tr>
<tr>
    <td><CopyableCode code="sources" /></td>
    <td><code>array</code></td>
    <td>The list of resources served by the consent portal.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current status of the consent portal. (CREATING, ACTIVE, UPDATING, UPDATE_FAILED, DELETING, FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp for when the consent portal was last updated.</td>
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
    <td><a href="#get_consent_portal"><CopyableCode code="get_consent_portal" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves information about a consent portal.</td>
</tr>
<tr>
    <td><a href="#list_consent_portals"><CopyableCode code="list_consent_portals" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists all of the consent portals in your account.</td>
</tr>
<tr>
    <td><a href="#create_consent_portal"><CopyableCode code="create_consent_portal" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-executionRoleArn"><code>executionRoleArn</code></a>, <a href="#parameter-idpConfig"><code>idpConfig</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-sources"><code>sources</code></a></td>
    <td></td>
    <td>Creates a new consent portal.</td>
</tr>
<tr>
    <td><a href="#update_consent_portal"><CopyableCode code="update_consent_portal" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-consentPortalIdentifier"><code>consentPortalIdentifier</code></a></td>
    <td></td>
    <td>Updates an existing consent portal.</td>
</tr>
<tr>
    <td><a href="#delete_consent_portal"><CopyableCode code="delete_consent_portal" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a consent portal.</td>
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
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_consent_portal"
    values={[
        { label: 'get_consent_portal', value: 'get_consent_portal' },
        { label: 'list_consent_portals', value: 'list_consent_portals' }
    ]}
>
<TabItem value="get_consent_portal">

Retrieves information about a consent portal.

```sql
SELECT
name,
consent_portal_arn,
consent_portal_id,
created_at,
description,
execution_role_arn,
idp_config,
portal_url,
sources,
status,
status_reason,
updated_at
FROM aws.bedrock_agentcore_control.consent_portals
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_consent_portals">

Lists all of the consent portals in your account.

```sql
SELECT
name,
consent_portal_arn,
consent_portal_id,
created_at,
description,
portal_url,
sources,
status,
updated_at
FROM aws.bedrock_agentcore_control.consent_portals
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_consent_portal"
    values={[
        { label: 'create_consent_portal', value: 'create_consent_portal' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_consent_portal">

Creates a new consent portal.

```sql
INSERT INTO aws.bedrock_agentcore_control.consent_portals (
executionRoleArn,
idpConfig,
name,
sources,
description,
tags,
region
)
SELECT 
'{{ executionRoleArn }}' /* required */,
'{{ idpConfig }}' /* required */,
'{{ name }}' /* required */,
'{{ sources }}' /* required */,
'{{ description }}',
'{{ tags }}',
'{{ region }}'
RETURNING
name,
consent_portal_arn,
consent_portal_id,
created_at,
description,
execution_role_arn,
idp_config,
portal_url,
sources,
status,
status_reason,
updated_at
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: consent_portals
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the consent_portals resource.
    - name: executionRoleArn
      value: "{{ executionRoleArn }}"
    - name: idpConfig
      description: |
        The identity provider configuration used to authenticate end users to the consent portal.
      value:
        credentialProviderArn: "{{ credentialProviderArn }}"
        scopes:
          - "{{ scopes }}"
        audience: "{{ audience }}"
    - name: name
      value: "{{ name }}"
    - name: sources
      description: |
        The list of resources served by the consent portal.
      value:
        - identifier: "{{ identifier }}"
          type_: "{{ type_ }}"
    - name: description
      value: "{{ description }}"
    - name: tags
      value: "{{ tags }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_consent_portal"
    values={[
        { label: 'update_consent_portal', value: 'update_consent_portal' }
    ]}
>
<TabItem value="update_consent_portal">

Updates an existing consent portal.

```sql
UPDATE aws.bedrock_agentcore_control.consent_portals
SET 
consentPortalIdentifier = '{{ consentPortalIdentifier }}',
executionRoleArn = '{{ executionRoleArn }}',
idpConfig = '{{ idpConfig }}',
description = '{{ description }}'
WHERE 
region = '{{ region }}' --required
AND consentPortalIdentifier = '{{ consentPortalIdentifier }}' --required
RETURNING
name,
consent_portal_arn,
consent_portal_id,
created_at,
description,
execution_role_arn,
idp_config,
portal_url,
sources,
status,
status_reason,
updated_at;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_consent_portal"
    values={[
        { label: 'delete_consent_portal', value: 'delete_consent_portal' }
    ]}
>
<TabItem value="delete_consent_portal">

Deletes a consent portal.

```sql
DELETE FROM aws.bedrock_agentcore_control.consent_portals
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
