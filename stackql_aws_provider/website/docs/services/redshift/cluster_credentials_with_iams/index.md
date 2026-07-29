--- 
title: cluster_credentials_with_iams
hide_title: false
hide_table_of_contents: false
keywords:
  - cluster_credentials_with_iams
  - redshift
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

Creates, updates, deletes, gets or lists a <code>cluster_credentials_with_iams</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="cluster_credentials_with_iams" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.redshift.cluster_credentials_with_iams" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_cluster_credentials_with_iam"
    values={[
        { label: 'get_cluster_credentials_with_iam', value: 'get_cluster_credentials_with_iam' }
    ]}
>
<TabItem value="get_cluster_credentials_with_iam">

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
    <td><CopyableCode code="db_password" /></td>
    <td><code>string</code></td>
    <td>A temporary password that you provide when you connect to a database.</td>
</tr>
<tr>
    <td><CopyableCode code="db_user" /></td>
    <td><code>string</code></td>
    <td>A database user name that you provide when you connect to a database. The database user is mapped 1:1 to the source IAM identity.</td>
</tr>
<tr>
    <td><CopyableCode code="expiration" /></td>
    <td><code>string</code></td>
    <td>The time (UTC) when the temporary password expires. After this timestamp, a log in with the temporary password fails.</td>
</tr>
<tr>
    <td><CopyableCode code="next_refresh_time" /></td>
    <td><code>string</code></td>
    <td>Reserved for future use.</td>
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
    <td><a href="#get_cluster_credentials_with_iam"><CopyableCode code="get_cluster_credentials_with_iam" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DbName"><code>DbName</code></a>, <a href="#parameter-ClusterIdentifier"><code>ClusterIdentifier</code></a>, <a href="#parameter-DurationSeconds"><code>DurationSeconds</code></a>, <a href="#parameter-CustomDomainName"><code>CustomDomainName</code></a></td>
    <td>Returns a database user name and temporary password with temporary authorization to log in to an Amazon Redshift database. The database user is mapped 1:1 to the source Identity and Access Management (IAM) identity. For more information about IAM identities, see IAM Identities (users, user groups, and roles) in the Amazon Web Services Identity and Access Management User Guide. The Identity and Access Management (IAM) identity that runs this operation must have an IAM policy attached that allows access to all necessary actions and resources. For more information about permissions, see Using identity-based policies (IAM policies) in the Amazon Redshift Cluster Management Guide.</td>
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
<tr id="parameter-ClusterIdentifier">
    <td><CopyableCode code="ClusterIdentifier" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the cluster that contains the database for which you are requesting credentials.</td>
</tr>
<tr id="parameter-CustomDomainName">
    <td><CopyableCode code="CustomDomainName" /></td>
    <td><code>string</code></td>
    <td>The custom domain name for the IAM message cluster credentials.</td>
</tr>
<tr id="parameter-DbName">
    <td><CopyableCode code="DbName" /></td>
    <td><code>string</code></td>
    <td>The name of the database for which you are requesting credentials. If the database name is specified, the IAM policy must allow access to the resource dbname for the specified database name. If the database name is not specified, access to all databases is allowed.</td>
</tr>
<tr id="parameter-DurationSeconds">
    <td><CopyableCode code="DurationSeconds" /></td>
    <td><code>integer</code></td>
    <td>The number of seconds until the returned temporary password expires. Range: 900-3600. Default: 900.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_cluster_credentials_with_iam"
    values={[
        { label: 'get_cluster_credentials_with_iam', value: 'get_cluster_credentials_with_iam' }
    ]}
>
<TabItem value="get_cluster_credentials_with_iam">

Returns a database user name and temporary password with temporary authorization to log in to an Amazon Redshift database. The database user is mapped 1:1 to the source Identity and Access Management (IAM) identity. For more information about IAM identities, see IAM Identities (users, user groups, and roles) in the Amazon Web Services Identity and Access Management User Guide. The Identity and Access Management (IAM) identity that runs this operation must have an IAM policy attached that allows access to all necessary actions and resources. For more information about permissions, see Using identity-based policies (IAM policies) in the Amazon Redshift Cluster Management Guide.

```sql
SELECT
db_password,
db_user,
expiration,
next_refresh_time
FROM aws.redshift.cluster_credentials_with_iams
WHERE region = '{{ region }}' -- required
AND DbName = '{{ DbName }}'
AND ClusterIdentifier = '{{ ClusterIdentifier }}'
AND DurationSeconds = '{{ DurationSeconds }}'
AND CustomDomainName = '{{ CustomDomainName }}'
;
```
</TabItem>
</Tabs>
