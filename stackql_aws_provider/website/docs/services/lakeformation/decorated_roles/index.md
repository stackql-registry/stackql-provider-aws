--- 
title: decorated_roles
hide_title: false
hide_table_of_contents: false
keywords:
  - decorated_roles
  - lakeformation
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

Creates, updates, deletes, gets or lists a <code>decorated_roles</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="decorated_roles" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.lakeformation.decorated_roles" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

`SELECT` not supported for this resource, use `SHOW METHODS` to view available operations for the resource.


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
    <td><a href="#assume_decorated_role_with_saml"><CopyableCode code="assume_decorated_role_with_saml" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-SAMLAssertion"><code>SAMLAssertion</code></a>, <a href="#parameter-RoleArn"><code>RoleArn</code></a>, <a href="#parameter-PrincipalArn"><code>PrincipalArn</code></a></td>
    <td></td>
    <td>Allows a caller to assume an IAM role decorated as the SAML user specified in the SAML assertion included in the request. This decoration allows Lake Formation to enforce access policies against the SAML users and groups. This API operation requires SAML federation setup in the caller’s account as it can only be called with valid SAML assertions. Lake Formation does not scope down the permission of the assumed role. All permissions attached to the role via the SAML federation setup will be included in the role session. This decorated role is expected to access data in Amazon S3 by getting temporary access from Lake Formation which is authorized via the virtual API GetDataAccess. Therefore, all SAML roles that can be assumed via AssumeDecoratedRoleWithSAML must at a minimum include lakeformation:GetDataAccess in their role policies. A typical IAM policy attached to such a role would include the following actions: glue:*Database* glue:*Table* glue:*Partition* glue:*UserDefinedFunction* lakeformation:GetDataAccess</td>
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

## Lifecycle Methods

<Tabs
    defaultValue="assume_decorated_role_with_saml"
    values={[
        { label: 'assume_decorated_role_with_saml', value: 'assume_decorated_role_with_saml' }
    ]}
>
<TabItem value="assume_decorated_role_with_saml">

Allows a caller to assume an IAM role decorated as the SAML user specified in the SAML assertion included in the request. This decoration allows Lake Formation to enforce access policies against the SAML users and groups. This API operation requires SAML federation setup in the caller’s account as it can only be called with valid SAML assertions. Lake Formation does not scope down the permission of the assumed role. All permissions attached to the role via the SAML federation setup will be included in the role session. This decorated role is expected to access data in Amazon S3 by getting temporary access from Lake Formation which is authorized via the virtual API GetDataAccess. Therefore, all SAML roles that can be assumed via AssumeDecoratedRoleWithSAML must at a minimum include lakeformation:GetDataAccess in their role policies. A typical IAM policy attached to such a role would include the following actions: glue:*Database* glue:*Table* glue:*Partition* glue:*UserDefinedFunction* lakeformation:GetDataAccess

```sql
EXEC aws.lakeformation.decorated_roles.assume_decorated_role_with_saml 
@region='{{ region }}' --required 
@@json=
'{
"SAMLAssertion": "{{ SAMLAssertion }}", 
"RoleArn": "{{ RoleArn }}", 
"PrincipalArn": "{{ PrincipalArn }}", 
"DurationSeconds": {{ DurationSeconds }}
}'
;
```
</TabItem>
</Tabs>
