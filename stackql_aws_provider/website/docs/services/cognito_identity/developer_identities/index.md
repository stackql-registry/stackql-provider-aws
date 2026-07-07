--- 
title: developer_identities
hide_title: false
hide_table_of_contents: false
keywords:
  - developer_identities
  - cognito_identity
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

Creates, updates, deletes, gets or lists a <code>developer_identities</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="developer_identities" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.cognito_identity.developer_identities" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="lookup_developer_identity"
    values={[
        { label: 'lookup_developer_identity', value: 'lookup_developer_identity' }
    ]}
>
<TabItem value="lookup_developer_identity">

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
    <td><CopyableCode code="DeveloperUserIdentifierList" /></td>
    <td><code>array</code></td>
    <td>This is the list of developer user identifiers associated with an identity ID. Cognito supports the association of multiple developer user identifiers with an identity ID.</td>
</tr>
<tr>
    <td><CopyableCode code="IdentityId" /></td>
    <td><code>string</code></td>
    <td>A unique identifier in the format REGION:GUID. (pattern: &lt;code&gt;&#91;\w-&#93;+:&#91;0-9a-f-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>A pagination token. The first call you make will have NextToken set to null. After that the service will return NextToken values as needed. For example, let's say you make a request with MaxResults set to 10, and there are 20 matches in the database. The service will return a pagination token as a part of the response. This token can be used to call the API again and get results starting from the 11th match. (pattern: &lt;code&gt;&#91;\S&#93;+&lt;/code&gt;)</td>
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
    <td><a href="#lookup_developer_identity"><CopyableCode code="lookup_developer_identity" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves the IdentityID associated with a DeveloperUserIdentifier or the list of DeveloperUserIdentifier values associated with an IdentityId for an existing identity. Either IdentityID or DeveloperUserIdentifier must not be null. If you supply only one of these values, the other value will be searched in the database and returned as a part of the response. If you supply both, DeveloperUserIdentifier will be matched against IdentityID. If the values are verified against the database, the response returns both values and is the same as the request. Otherwise, a ResourceConflictException is thrown. LookupDeveloperIdentity is intended for low-throughput control plane operations: for example, to enable customer service to locate an identity ID by username. If you are using it for higher-volume operations such as user authentication, your requests are likely to be throttled. GetOpenIdTokenForDeveloperIdentity is a better option for higher-volume operations for user authentication. You must use Amazon Web Services developer credentials to call this operation.</td>
</tr>
<tr>
    <td><a href="#merge_developer_identities"><CopyableCode code="merge_developer_identities" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-SourceUserIdentifier"><code>SourceUserIdentifier</code></a>, <a href="#parameter-DestinationUserIdentifier"><code>DestinationUserIdentifier</code></a>, <a href="#parameter-DeveloperProviderName"><code>DeveloperProviderName</code></a>, <a href="#parameter-IdentityPoolId"><code>IdentityPoolId</code></a></td>
    <td></td>
    <td>Merges two users having different IdentityIds, existing in the same identity pool, and identified by the same developer provider. You can use this action to request that discrete users be merged and identified as a single user in the Cognito environment. Cognito associates the given source user (SourceUserIdentifier) with the IdentityId of the DestinationUserIdentifier. Only developer-authenticated users can be merged. If the users to be merged are associated with the same public provider, but as two different users, an exception will be thrown. The number of linked logins is limited to 20. So, the number of linked logins for the source user, SourceUserIdentifier, and the destination user, DestinationUserIdentifier, together should not be larger than 20. Otherwise, an exception will be thrown. You must use Amazon Web Services developer credentials to call this operation.</td>
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
    defaultValue="lookup_developer_identity"
    values={[
        { label: 'lookup_developer_identity', value: 'lookup_developer_identity' }
    ]}
>
<TabItem value="lookup_developer_identity">

Retrieves the IdentityID associated with a DeveloperUserIdentifier or the list of DeveloperUserIdentifier values associated with an IdentityId for an existing identity. Either IdentityID or DeveloperUserIdentifier must not be null. If you supply only one of these values, the other value will be searched in the database and returned as a part of the response. If you supply both, DeveloperUserIdentifier will be matched against IdentityID. If the values are verified against the database, the response returns both values and is the same as the request. Otherwise, a ResourceConflictException is thrown. LookupDeveloperIdentity is intended for low-throughput control plane operations: for example, to enable customer service to locate an identity ID by username. If you are using it for higher-volume operations such as user authentication, your requests are likely to be throttled. GetOpenIdTokenForDeveloperIdentity is a better option for higher-volume operations for user authentication. You must use Amazon Web Services developer credentials to call this operation.

```sql
SELECT
DeveloperUserIdentifierList,
IdentityId,
NextToken
FROM aws.cognito_identity.developer_identities
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="merge_developer_identities"
    values={[
        { label: 'merge_developer_identities', value: 'merge_developer_identities' }
    ]}
>
<TabItem value="merge_developer_identities">

Merges two users having different IdentityIds, existing in the same identity pool, and identified by the same developer provider. You can use this action to request that discrete users be merged and identified as a single user in the Cognito environment. Cognito associates the given source user (SourceUserIdentifier) with the IdentityId of the DestinationUserIdentifier. Only developer-authenticated users can be merged. If the users to be merged are associated with the same public provider, but as two different users, an exception will be thrown. The number of linked logins is limited to 20. So, the number of linked logins for the source user, SourceUserIdentifier, and the destination user, DestinationUserIdentifier, together should not be larger than 20. Otherwise, an exception will be thrown. You must use Amazon Web Services developer credentials to call this operation.

```sql
EXEC aws.cognito_identity.developer_identities.merge_developer_identities 
@region='{{ region }}' --required 
@@json=
'{
"SourceUserIdentifier": "{{ SourceUserIdentifier }}", 
"DestinationUserIdentifier": "{{ DestinationUserIdentifier }}", 
"DeveloperProviderName": "{{ DeveloperProviderName }}", 
"IdentityPoolId": "{{ IdentityPoolId }}"
}'
;
```
</TabItem>
</Tabs>
