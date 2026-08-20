--- 
title: user_pool_domains
hide_title: false
hide_table_of_contents: false
keywords:
  - user_pool_domains
  - cognito_idp
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

Creates, updates, deletes, gets or lists a <code>user_pool_domains</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="user_pool_domains" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.cognito_idp.user_pool_domains" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_user_pool_domain"
    values={[
        { label: 'describe_user_pool_domain', value: 'describe_user_pool_domain' }
    ]}
>
<TabItem value="describe_user_pool_domain">

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
    <td><CopyableCode code="aws_account_id" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services account that you created the user pool in. (pattern: &lt;code&gt;&#91;0-9&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="cloud_front_distribution" /></td>
    <td><code>string</code></td>
    <td>The Amazon CloudFront endpoint that hosts your custom domain.</td>
</tr>
<tr>
    <td><CopyableCode code="custom_domain_config" /></td>
    <td><code>object</code></td>
    <td>The configuration for a custom domain that hosts the sign-up and sign-in webpages for your application.</td>
</tr>
<tr>
    <td><CopyableCode code="domain" /></td>
    <td><code>string</code></td>
    <td>The domain string. For custom domains, this is the fully-qualified domain name, such as auth.example.com. For Amazon Cognito prefix domains, this is the prefix alone, such as auth. (pattern: &lt;code&gt;^&#91;a-z0-9&#93;(?:&#91;a-z0-9\-&#93;&#123;0,61&#125;&#91;a-z0-9&#93;)?$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="managed_login_version" /></td>
    <td><code>integer</code></td>
    <td>The version of managed login branding that you want to apply to your domain. A value of 1 indicates hosted UI (classic) branding and a version of 2 indicates managed login branding. Managed login requires that your user pool be configured for any feature plan other than Lite.</td>
</tr>
<tr>
    <td><CopyableCode code="routing" /></td>
    <td><code>object</code></td>
    <td>The routing configuration for the domain, including failover settings for multi-region deployments. Currently only Failover configurations are allowed.</td>
</tr>
<tr>
    <td><CopyableCode code="s3_bucket" /></td>
    <td><code>string</code></td>
    <td>The Amazon S3 bucket where the static files for this domain are stored. (pattern: &lt;code&gt;^&#91;0-9A-Za-z\.\-_&#93;*(?&lt;!\.)$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The domain status. (CREATING, DELETING, UPDATING, ACTIVE, FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="user_pool_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the user pool that the domain is attached to. (pattern: &lt;code&gt;&#91;\w-&#93;+_&#91;0-9a-zA-Z&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="version" /></td>
    <td><code>string</code></td>
    <td>The app version.</td>
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
    <td><a href="#describe_user_pool_domain"><CopyableCode code="describe_user_pool_domain" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Given a user pool domain name, returns information about the domain configuration. Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy. Learn more Signing Amazon Web Services API Requests Using the Amazon Cognito user pools API and user pool endpoints</td>
</tr>
<tr>
    <td><a href="#create_user_pool_domain"><CopyableCode code="create_user_pool_domain" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-Domain"><code>Domain</code></a>, <a href="#parameter-UserPoolId"><code>UserPoolId</code></a></td>
    <td></td>
    <td>A user pool domain hosts managed login, an authorization server and web server for authentication in your application. This operation creates a new user pool prefix domain or custom domain and sets the managed login branding version. Set the branding version to 1 for hosted UI (classic) or 2 for managed login. When you choose a custom domain, you must provide an SSL certificate in the US East (N. Virginia) Amazon Web Services Region in your request. Your prefix domain might take up to one minute to take effect. Your custom domain is online within five minutes, but it can take up to one hour to distribute your SSL certificate. For more information about adding a custom domain to your user pool, see Configuring a user pool domain. Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy. Learn more Signing Amazon Web Services API Requests Using the Amazon Cognito user pools API and user pool endpoints</td>
</tr>
<tr>
    <td><a href="#update_user_pool_domain"><CopyableCode code="update_user_pool_domain" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-Domain"><code>Domain</code></a>, <a href="#parameter-UserPoolId"><code>UserPoolId</code></a></td>
    <td></td>
    <td>A user pool domain hosts managed login, an authorization server and web server for authentication in your application. This operation updates the branding version for user pool domains between 1 for hosted UI (classic) and 2 for managed login. It also updates the SSL certificate for user pool custom domains. Changes to the domain branding version take up to one minute to take effect for a prefix domain and up to five minutes for a custom domain. This operation doesn't change the name of your user pool domain. To change your domain, delete it with DeleteUserPoolDomain and create a new domain with CreateUserPoolDomain. You can pass the ARN of a new Certificate Manager certificate in this request. Typically, ACM certificates automatically renew and you user pool can continue to use the same ARN. But if you generate a new certificate for your custom domain name, replace the original configuration with the new ARN in this request. ACM certificates for custom domains must be in the US East (N. Virginia) Amazon Web Services Region. After you submit your request, Amazon Cognito requires up to 1 hour to distribute your new certificate to your custom domain. For more information about adding a custom domain to your user pool, see Configuring a user pool domain. Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy. Learn more Signing Amazon Web Services API Requests Using the Amazon Cognito user pools API and user pool endpoints</td>
</tr>
<tr>
    <td><a href="#delete_user_pool_domain"><CopyableCode code="delete_user_pool_domain" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Given a user pool ID and domain identifier, deletes a user pool domain. After you delete a user pool domain, your managed login pages and authorization server are no longer available.</td>
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
    defaultValue="describe_user_pool_domain"
    values={[
        { label: 'describe_user_pool_domain', value: 'describe_user_pool_domain' }
    ]}
>
<TabItem value="describe_user_pool_domain">

Given a user pool domain name, returns information about the domain configuration. Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy. Learn more Signing Amazon Web Services API Requests Using the Amazon Cognito user pools API and user pool endpoints

```sql
SELECT
aws_account_id,
cloud_front_distribution,
custom_domain_config,
domain,
managed_login_version,
routing,
s3_bucket,
status,
user_pool_id,
version
FROM aws.cognito_idp.user_pool_domains
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_user_pool_domain"
    values={[
        { label: 'create_user_pool_domain', value: 'create_user_pool_domain' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_user_pool_domain">

A user pool domain hosts managed login, an authorization server and web server for authentication in your application. This operation creates a new user pool prefix domain or custom domain and sets the managed login branding version. Set the branding version to 1 for hosted UI (classic) or 2 for managed login. When you choose a custom domain, you must provide an SSL certificate in the US East (N. Virginia) Amazon Web Services Region in your request. Your prefix domain might take up to one minute to take effect. Your custom domain is online within five minutes, but it can take up to one hour to distribute your SSL certificate. For more information about adding a custom domain to your user pool, see Configuring a user pool domain. Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy. Learn more Signing Amazon Web Services API Requests Using the Amazon Cognito user pools API and user pool endpoints

```sql
INSERT INTO aws.cognito_idp.user_pool_domains (
Domain,
UserPoolId,
ManagedLoginVersion,
CustomDomainConfig,
Routing,
region
)
SELECT 
'{{ Domain }}' /* required */,
'{{ UserPoolId }}' /* required */,
{{ ManagedLoginVersion }},
'{{ CustomDomainConfig }}',
'{{ Routing }}',
'{{ region }}'
RETURNING
cloud_front_domain,
managed_login_version,
routing
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: user_pool_domains
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the user_pool_domains resource.
    - name: Domain
      value: "{{ Domain }}"
      description: |
        The domain string. For custom domains, this is the fully-qualified domain name, such as auth.example.com. For prefix domains, this is the prefix alone, such as myprefix. A prefix value of myprefix for a user pool in the us-east-1 Region results in a domain of myprefix.auth.us-east-1.amazoncognito.com.
    - name: UserPoolId
      value: "{{ UserPoolId }}"
      description: |
        The ID of the user pool where you want to add a domain.
    - name: ManagedLoginVersion
      value: {{ ManagedLoginVersion }}
      description: |
        The version of managed login branding that you want to apply to your domain. A value of 1 indicates hosted UI (classic) and a version of 2 indicates managed login. Managed login requires that your user pool be configured for any feature plan other than Lite. A ManagedLoginVersion value of 2 does not activate managed login pages for your app client. When you create an app client programmatically, your app client has no branding style. To use managed login, create a branding style using the CreateManagedLoginBranding operation. When you use the console, Amazon Cognito assigns a default branding style automatically. When you use the API or an SDK, you must create a branding style yourself.
    - name: CustomDomainConfig
      description: |
        The configuration for a custom domain. Configures your domain with an Certificate Manager certificate in the us-east-1 Region. Provide this parameter only if you want to use a custom domain for your user pool. Otherwise, you can omit this parameter and use a prefix domain instead. When you create a custom domain, the passkey RP ID defaults to the custom domain. If you had a prefix domain active, this will cause passkey integration for your prefix domain to stop working due to a mismatch in RP ID. To keep the prefix domain passkey integration working, you can explicitly set RP ID to the prefix domain.
      value:
        CertificateArn: "{{ CertificateArn }}"
        SecurityPolicy: "{{ SecurityPolicy }}"
    - name: Routing
      description: |
        The configuration of routing for requests to the domain for replicas of a replicated user pool. The routing configuration is currently only supported for custom domains.
      value:
        Failover:
          SecondaryRegion: "{{ SecondaryRegion }}"
          PrimaryRoute53HealthCheckId: "{{ PrimaryRoute53HealthCheckId }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_user_pool_domain"
    values={[
        { label: 'update_user_pool_domain', value: 'update_user_pool_domain' }
    ]}
>
<TabItem value="update_user_pool_domain">

A user pool domain hosts managed login, an authorization server and web server for authentication in your application. This operation updates the branding version for user pool domains between 1 for hosted UI (classic) and 2 for managed login. It also updates the SSL certificate for user pool custom domains. Changes to the domain branding version take up to one minute to take effect for a prefix domain and up to five minutes for a custom domain. This operation doesn't change the name of your user pool domain. To change your domain, delete it with DeleteUserPoolDomain and create a new domain with CreateUserPoolDomain. You can pass the ARN of a new Certificate Manager certificate in this request. Typically, ACM certificates automatically renew and you user pool can continue to use the same ARN. But if you generate a new certificate for your custom domain name, replace the original configuration with the new ARN in this request. ACM certificates for custom domains must be in the US East (N. Virginia) Amazon Web Services Region. After you submit your request, Amazon Cognito requires up to 1 hour to distribute your new certificate to your custom domain. For more information about adding a custom domain to your user pool, see Configuring a user pool domain. Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy. Learn more Signing Amazon Web Services API Requests Using the Amazon Cognito user pools API and user pool endpoints

```sql
UPDATE aws.cognito_idp.user_pool_domains
SET 
Domain = '{{ Domain }}',
UserPoolId = '{{ UserPoolId }}',
ManagedLoginVersion = {{ ManagedLoginVersion }},
CustomDomainConfig = '{{ CustomDomainConfig }}',
Routing = '{{ Routing }}'
WHERE 
region = '{{ region }}' --required
AND Domain = '{{ Domain }}' --required
AND UserPoolId = '{{ UserPoolId }}' --required
RETURNING
cloud_front_domain,
managed_login_version,
routing;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_user_pool_domain"
    values={[
        { label: 'delete_user_pool_domain', value: 'delete_user_pool_domain' }
    ]}
>
<TabItem value="delete_user_pool_domain">

Given a user pool ID and domain identifier, deletes a user pool domain. After you delete a user pool domain, your managed login pages and authorization server are no longer available.

```sql
DELETE FROM aws.cognito_idp.user_pool_domains
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
