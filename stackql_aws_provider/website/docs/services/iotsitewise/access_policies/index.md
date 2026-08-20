--- 
title: access_policies
hide_title: false
hide_table_of_contents: false
keywords:
  - access_policies
  - iotsitewise
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

Creates, updates, deletes, gets or lists an <code>access_policies</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="access_policies" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.iotsitewise.access_policies" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_access_policy"
    values={[
        { label: 'describe_access_policy', value: 'describe_access_policy' },
        { label: 'list_access_policies', value: 'list_access_policies' }
    ]}
>
<TabItem value="describe_access_policy">

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
    <td><CopyableCode code="access_policy_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the access policy, which has the following format. arn:$&#123;Partition&#125;:iotsitewise:$&#123;Region&#125;:$&#123;Account&#125;:access-policy/$&#123;AccessPolicyId&#125; (pattern: &lt;code&gt;^arn:aws(-cn|-us-gov)?:&#91;a-zA-Z0-9-:\/_\.&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="access_policy_creation_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date the access policy was created, in Unix epoch time.</td>
</tr>
<tr>
    <td><CopyableCode code="access_policy_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the access policy. (pattern: &lt;code&gt;^(?!00000000-0000-0000-0000-000000000000)&#91;0-9a-f&#93;&#123;8&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;12&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="access_policy_identity" /></td>
    <td><code>object</code></td>
    <td>Contains an identity that can access an IoT SiteWise Monitor resource. Currently, you can't use Amazon Web Services API operations to retrieve IAM Identity Center identity IDs. You can find the IAM Identity Center identity IDs in the URL of user and group pages in the IAM Identity Center console.</td>
</tr>
<tr>
    <td><CopyableCode code="access_policy_last_update_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date the access policy was last updated, in Unix epoch time.</td>
</tr>
<tr>
    <td><CopyableCode code="access_policy_permission" /></td>
    <td><code>string</code></td>
    <td>The access policy permission. Note that a project ADMINISTRATOR is also known as a project owner. (ADMINISTRATOR, VIEWER)</td>
</tr>
<tr>
    <td><CopyableCode code="access_policy_resource" /></td>
    <td><code>object</code></td>
    <td>Contains an IoT SiteWise Monitor resource ID for a portal or project.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_access_policies">

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
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The ID of the access policy. (pattern: &lt;code&gt;^(?!00000000-0000-0000-0000-000000000000)&#91;0-9a-f&#93;&#123;8&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;12&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="creation_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date the access policy was created, in Unix epoch time.</td>
</tr>
<tr>
    <td><CopyableCode code="identity" /></td>
    <td><code>object</code></td>
    <td>Contains an identity that can access an IoT SiteWise Monitor resource. Currently, you can't use Amazon Web Services API operations to retrieve IAM Identity Center identity IDs. You can find the IAM Identity Center identity IDs in the URL of user and group pages in the IAM Identity Center console.</td>
</tr>
<tr>
    <td><CopyableCode code="last_update_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date the access policy was last updated, in Unix epoch time.</td>
</tr>
<tr>
    <td><CopyableCode code="permission" /></td>
    <td><code>string</code></td>
    <td>The permissions for the access policy. Note that a project ADMINISTRATOR is also known as a project owner. (ADMINISTRATOR, VIEWER)</td>
</tr>
<tr>
    <td><CopyableCode code="resource" /></td>
    <td><code>object</code></td>
    <td>Contains an IoT SiteWise Monitor resource ID for a portal or project.</td>
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
    <td><a href="#describe_access_policy"><CopyableCode code="describe_access_policy" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-access_policy_id"><code>access_policy_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Describes an access policy, which specifies an identity's access to an IoT SiteWise Monitor portal or project.</td>
</tr>
<tr>
    <td><a href="#list_access_policies"><CopyableCode code="list_access_policies" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-identityType"><code>identityType</code></a>, <a href="#parameter-identityId"><code>identityId</code></a>, <a href="#parameter-resourceType"><code>resourceType</code></a>, <a href="#parameter-resourceId"><code>resourceId</code></a>, <a href="#parameter-iamArn"><code>iamArn</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a></td>
    <td>Retrieves a paginated list of access policies for an identity (an IAM Identity Center user, an IAM Identity Center group, or an IAM user) or an IoT SiteWise Monitor resource (a portal or project).</td>
</tr>
<tr>
    <td><a href="#create_access_policy"><CopyableCode code="create_access_policy" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-accessPolicyIdentity"><code>accessPolicyIdentity</code></a>, <a href="#parameter-accessPolicyResource"><code>accessPolicyResource</code></a>, <a href="#parameter-accessPolicyPermission"><code>accessPolicyPermission</code></a></td>
    <td></td>
    <td>The IoT SiteWise Monitor feature will no longer be open to new customers starting November 7, 2025. If you would like to use the IoT SiteWise Monitor feature, sign up prior to that date. Existing customers can continue to use the service as normal. For more information, see IoT SiteWise Monitor availability change. Creates an access policy that grants the specified identity (IAM Identity Center user, IAM Identity Center group, or IAM user) access to the specified IoT SiteWise Monitor portal or project resource. Support for access policies that use an SSO Group as the identity is not supported at this time.</td>
</tr>
<tr>
    <td><a href="#update_access_policy"><CopyableCode code="update_access_policy" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-access_policy_id"><code>access_policy_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-accessPolicyIdentity"><code>accessPolicyIdentity</code></a>, <a href="#parameter-accessPolicyResource"><code>accessPolicyResource</code></a>, <a href="#parameter-accessPolicyPermission"><code>accessPolicyPermission</code></a></td>
    <td></td>
    <td>The IoT SiteWise Monitor feature will no longer be open to new customers starting November 7, 2025. If you would like to use the IoT SiteWise Monitor feature, sign up prior to that date. Existing customers can continue to use the service as normal. For more information, see IoT SiteWise Monitor availability change. Updates an existing access policy that specifies an identity's access to an IoT SiteWise Monitor portal or project resource.</td>
</tr>
<tr>
    <td><a href="#delete_access_policy"><CopyableCode code="delete_access_policy" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-access_policy_id"><code>access_policy_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-clientToken"><code>clientToken</code></a></td>
    <td>Deletes an access policy that grants the specified identity access to the specified IoT SiteWise Monitor resource. You can use this operation to revoke access to an IoT SiteWise Monitor resource.</td>
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
<tr id="parameter-access_policy_id">
    <td><CopyableCode code="access_policy_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the access policy to be deleted.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-clientToken">
    <td><CopyableCode code="clientToken" /></td>
    <td><code>string</code></td>
    <td>A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.</td>
</tr>
<tr id="parameter-iamArn">
    <td><CopyableCode code="iamArn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the IAM user. For more information, see IAM ARNs in the IAM User Guide. This parameter is required if you specify IAM for identityType.</td>
</tr>
<tr id="parameter-identityId">
    <td><CopyableCode code="identityId" /></td>
    <td><code>string</code></td>
    <td>The ID of the identity. This parameter is required if you specify USER or GROUP for identityType.</td>
</tr>
<tr id="parameter-identityType">
    <td><CopyableCode code="identityType" /></td>
    <td><code>string</code></td>
    <td>The type of identity (IAM Identity Center user, IAM Identity Center group, or IAM user). This parameter is required if you specify identityId.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return for each paginated request. Default: 50</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The token to be used for the next set of paginated results.</td>
</tr>
<tr id="parameter-resourceId">
    <td><CopyableCode code="resourceId" /></td>
    <td><code>string</code></td>
    <td>The ID of the resource. This parameter is required if you specify resourceType.</td>
</tr>
<tr id="parameter-resourceType">
    <td><CopyableCode code="resourceType" /></td>
    <td><code>string</code></td>
    <td>The type of resource (portal or project). This parameter is required if you specify resourceId.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_access_policy"
    values={[
        { label: 'describe_access_policy', value: 'describe_access_policy' },
        { label: 'list_access_policies', value: 'list_access_policies' }
    ]}
>
<TabItem value="describe_access_policy">

Describes an access policy, which specifies an identity's access to an IoT SiteWise Monitor portal or project.

```sql
SELECT
access_policy_arn,
access_policy_creation_date,
access_policy_id,
access_policy_identity,
access_policy_last_update_date,
access_policy_permission,
access_policy_resource
FROM aws.iotsitewise.access_policies
WHERE access_policy_id = '{{ access_policy_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_access_policies">

Retrieves a paginated list of access policies for an identity (an IAM Identity Center user, an IAM Identity Center group, or an IAM user) or an IoT SiteWise Monitor resource (a portal or project).

```sql
SELECT
id,
creation_date,
identity,
last_update_date,
permission,
resource
FROM aws.iotsitewise.access_policies
WHERE region = '{{ region }}' -- required
AND identityType = '{{ identityType }}'
AND identityId = '{{ identityId }}'
AND resourceType = '{{ resourceType }}'
AND resourceId = '{{ resourceId }}'
AND iamArn = '{{ iamArn }}'
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_access_policy"
    values={[
        { label: 'create_access_policy', value: 'create_access_policy' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_access_policy">

The IoT SiteWise Monitor feature will no longer be open to new customers starting November 7, 2025. If you would like to use the IoT SiteWise Monitor feature, sign up prior to that date. Existing customers can continue to use the service as normal. For more information, see IoT SiteWise Monitor availability change. Creates an access policy that grants the specified identity (IAM Identity Center user, IAM Identity Center group, or IAM user) access to the specified IoT SiteWise Monitor portal or project resource. Support for access policies that use an SSO Group as the identity is not supported at this time.

```sql
INSERT INTO aws.iotsitewise.access_policies (
accessPolicyIdentity,
accessPolicyResource,
accessPolicyPermission,
clientToken,
tags,
region
)
SELECT 
'{{ accessPolicyIdentity }}' /* required */,
'{{ accessPolicyResource }}' /* required */,
'{{ accessPolicyPermission }}' /* required */,
'{{ clientToken }}',
'{{ tags }}',
'{{ region }}'
RETURNING
access_policy_arn,
access_policy_id
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: access_policies
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the access_policies resource.
    - name: accessPolicyIdentity
      description: |
        Contains an identity that can access an IoT SiteWise Monitor resource. Currently, you can't use Amazon Web Services API operations to retrieve IAM Identity Center identity IDs. You can find the IAM Identity Center identity IDs in the URL of user and group pages in the IAM Identity Center console.
      value:
        user:
          id: "{{ id }}"
        group:
          id: "{{ id }}"
        iamUser:
          arn: "{{ arn }}"
        iamRole:
          arn: "{{ arn }}"
    - name: accessPolicyResource
      description: |
        Contains an IoT SiteWise Monitor resource ID for a portal or project.
      value:
        portal:
          id: "{{ id }}"
        project:
          id: "{{ id }}"
    - name: accessPolicyPermission
      value: "{{ accessPolicyPermission }}"
      valid_values: ['ADMINISTRATOR', 'VIEWER']
    - name: clientToken
      value: "{{ clientToken }}"
    - name: tags
      value: "{{ tags }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_access_policy"
    values={[
        { label: 'update_access_policy', value: 'update_access_policy' }
    ]}
>
<TabItem value="update_access_policy">

The IoT SiteWise Monitor feature will no longer be open to new customers starting November 7, 2025. If you would like to use the IoT SiteWise Monitor feature, sign up prior to that date. Existing customers can continue to use the service as normal. For more information, see IoT SiteWise Monitor availability change. Updates an existing access policy that specifies an identity's access to an IoT SiteWise Monitor portal or project resource.

```sql
UPDATE aws.iotsitewise.access_policies
SET 
accessPolicyIdentity = '{{ accessPolicyIdentity }}',
accessPolicyResource = '{{ accessPolicyResource }}',
accessPolicyPermission = '{{ accessPolicyPermission }}',
clientToken = '{{ clientToken }}'
WHERE 
access_policy_id = '{{ access_policy_id }}' --required
AND region = '{{ region }}' --required
AND accessPolicyIdentity = '{{ accessPolicyIdentity }}' --required
AND accessPolicyResource = '{{ accessPolicyResource }}' --required
AND accessPolicyPermission = '{{ accessPolicyPermission }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_access_policy"
    values={[
        { label: 'delete_access_policy', value: 'delete_access_policy' }
    ]}
>
<TabItem value="delete_access_policy">

Deletes an access policy that grants the specified identity access to the specified IoT SiteWise Monitor resource. You can use this operation to revoke access to an IoT SiteWise Monitor resource.

```sql
DELETE FROM aws.iotsitewise.access_policies
WHERE access_policy_id = '{{ access_policy_id }}' --required
AND region = '{{ region }}' --required
AND clientToken = '{{ clientToken }}'
;
```
</TabItem>
</Tabs>
