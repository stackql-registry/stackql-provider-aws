--- 
title: embed_urls
hide_title: false
hide_table_of_contents: false
keywords:
  - embed_urls
  - quicksight
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

Creates, updates, deletes, gets or lists an <code>embed_urls</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="embed_urls" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.quicksight.embed_urls" /></td></tr>
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
    <td><a href="#generate_embed_url_for_anonymous_user"><CopyableCode code="generate_embed_url_for_anonymous_user" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-aws_account_id"><code>aws_account_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-Namespace"><code>Namespace</code></a>, <a href="#parameter-AuthorizedResourceArns"><code>AuthorizedResourceArns</code></a>, <a href="#parameter-ExperienceConfiguration"><code>ExperienceConfiguration</code></a></td>
    <td></td>
    <td>Generates an embed URL that you can use to embed an Amazon Quick dashboard or visual in your website, without having to register any reader users. Before you use this action, make sure that you have configured the dashboards and permissions. The following rules apply to the generated URL: It contains a temporary bearer token. It is valid for 5 minutes after it is generated. Once redeemed within this period, it cannot be re-used again. The URL validity period should not be confused with the actual session lifetime that can be customized using the SessionLifetimeInMinutes parameter. The resulting user session is valid for 15 minutes (minimum) to 10 hours (maximum). The default session duration is 10 hours. You are charged only when the URL is used or there is interaction with Amazon Quick. For more information, see Embedded Analytics in the Amazon Quick User Guide. For more information about the high-level steps for embedding and for an interactive demo of the ways you can customize embedding, visit the Amazon Quick Developer Portal.</td>
</tr>
<tr>
    <td><a href="#generate_embed_url_for_registered_user_with_identity"><CopyableCode code="generate_embed_url_for_registered_user_with_identity" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-aws_account_id"><code>aws_account_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ExperienceConfiguration"><code>ExperienceConfiguration</code></a></td>
    <td></td>
    <td>Generates an embed URL that you can use to embed an Amazon Quick Sight experience in your website. This action can be used for any type of user that is registered in an Amazon Quick Sight account that uses IAM Identity Center for authentication. This API requires identity-enhanced IAM Role sessions for the authenticated user that the API call is being made for. This API uses trusted identity propagation to ensure that an end user is authenticated and receives the embed URL that is specific to that user. The IAM Identity Center application that the user has logged into needs to have trusted Identity Propagation enabled for Amazon Quick Sight with the scope value set to quicksight:read. Before you use this action, make sure that you have configured the relevant Amazon Quick Sight resource and permissions.</td>
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
<tr id="parameter-aws_account_id">
    <td><CopyableCode code="aws_account_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the Amazon Web Services registered user.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
</tbody>
</table>

## Lifecycle Methods

<Tabs
    defaultValue="generate_embed_url_for_anonymous_user"
    values={[
        { label: 'generate_embed_url_for_anonymous_user', value: 'generate_embed_url_for_anonymous_user' },
        { label: 'generate_embed_url_for_registered_user_with_identity', value: 'generate_embed_url_for_registered_user_with_identity' }
    ]}
>
<TabItem value="generate_embed_url_for_anonymous_user">

Generates an embed URL that you can use to embed an Amazon Quick dashboard or visual in your website, without having to register any reader users. Before you use this action, make sure that you have configured the dashboards and permissions. The following rules apply to the generated URL: It contains a temporary bearer token. It is valid for 5 minutes after it is generated. Once redeemed within this period, it cannot be re-used again. The URL validity period should not be confused with the actual session lifetime that can be customized using the SessionLifetimeInMinutes parameter. The resulting user session is valid for 15 minutes (minimum) to 10 hours (maximum). The default session duration is 10 hours. You are charged only when the URL is used or there is interaction with Amazon Quick. For more information, see Embedded Analytics in the Amazon Quick User Guide. For more information about the high-level steps for embedding and for an interactive demo of the ways you can customize embedding, visit the Amazon Quick Developer Portal.

```sql
EXEC aws.quicksight.embed_urls.generate_embed_url_for_anonymous_user 
@aws_account_id='{{ aws_account_id }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"SessionLifetimeInMinutes": {{ SessionLifetimeInMinutes }}, 
"Namespace": "{{ Namespace }}", 
"SessionTags": "{{ SessionTags }}", 
"AuthorizedResourceArns": "{{ AuthorizedResourceArns }}", 
"ExperienceConfiguration": "{{ ExperienceConfiguration }}", 
"AllowedDomains": "{{ AllowedDomains }}"
}'
;
```
</TabItem>
<TabItem value="generate_embed_url_for_registered_user_with_identity">

Generates an embed URL that you can use to embed an Amazon Quick Sight experience in your website. This action can be used for any type of user that is registered in an Amazon Quick Sight account that uses IAM Identity Center for authentication. This API requires identity-enhanced IAM Role sessions for the authenticated user that the API call is being made for. This API uses trusted identity propagation to ensure that an end user is authenticated and receives the embed URL that is specific to that user. The IAM Identity Center application that the user has logged into needs to have trusted Identity Propagation enabled for Amazon Quick Sight with the scope value set to quicksight:read. Before you use this action, make sure that you have configured the relevant Amazon Quick Sight resource and permissions.

```sql
EXEC aws.quicksight.embed_urls.generate_embed_url_for_registered_user_with_identity 
@aws_account_id='{{ aws_account_id }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"SessionLifetimeInMinutes": {{ SessionLifetimeInMinutes }}, 
"ExperienceConfiguration": "{{ ExperienceConfiguration }}", 
"AllowedDomains": "{{ AllowedDomains }}"
}'
;
```
</TabItem>
</Tabs>
