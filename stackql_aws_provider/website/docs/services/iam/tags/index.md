--- 
title: tags
hide_title: false
hide_table_of_contents: false
keywords:
  - tags
  - iam
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

Creates, updates, deletes, gets or lists a <code>tags</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="tags" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.iam.tags" /></td></tr>
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
    <td><a href="#untag_instance_profile"><CopyableCode code="untag_instance_profile" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-InstanceProfileName"><code>InstanceProfileName</code></a>, <a href="#parameter-TagKeys"><code>TagKeys</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Removes the specified tags from the IAM instance profile. For more information about tagging, see Tagging IAM resources in the IAM User Guide.</td>
</tr>
<tr>
    <td><a href="#untag_mfa_device"><CopyableCode code="untag_mfa_device" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-SerialNumber"><code>SerialNumber</code></a>, <a href="#parameter-TagKeys"><code>TagKeys</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Removes the specified tags from the IAM virtual multi-factor authentication (MFA) device. For more information about tagging, see Tagging IAM resources in the IAM User Guide.</td>
</tr>
<tr>
    <td><a href="#untag_open_id_connect_provider"><CopyableCode code="untag_open_id_connect_provider" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-OpenIDConnectProviderArn"><code>OpenIDConnectProviderArn</code></a>, <a href="#parameter-TagKeys"><code>TagKeys</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Removes the specified tags from the specified OpenID Connect (OIDC)-compatible identity provider in IAM. For more information about OIDC providers, see About web identity federation. For more information about tagging, see Tagging IAM resources in the IAM User Guide.</td>
</tr>
<tr>
    <td><a href="#untag_policy"><CopyableCode code="untag_policy" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-PolicyArn"><code>PolicyArn</code></a>, <a href="#parameter-TagKeys"><code>TagKeys</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Removes the specified tags from the customer managed policy. For more information about tagging, see Tagging IAM resources in the IAM User Guide.</td>
</tr>
<tr>
    <td><a href="#untag_role"><CopyableCode code="untag_role" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-RoleName"><code>RoleName</code></a>, <a href="#parameter-TagKeys"><code>TagKeys</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Removes the specified tags from the role. For more information about tagging, see Tagging IAM resources in the IAM User Guide.</td>
</tr>
<tr>
    <td><a href="#untag_saml_provider"><CopyableCode code="untag_saml_provider" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-SAMLProviderArn"><code>SAMLProviderArn</code></a>, <a href="#parameter-TagKeys"><code>TagKeys</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Removes the specified tags from the specified Security Assertion Markup Language (SAML) identity provider in IAM. For more information about these providers, see About web identity federation. For more information about tagging, see Tagging IAM resources in the IAM User Guide.</td>
</tr>
<tr>
    <td><a href="#untag_server_certificate"><CopyableCode code="untag_server_certificate" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-ServerCertificateName"><code>ServerCertificateName</code></a>, <a href="#parameter-TagKeys"><code>TagKeys</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Removes the specified tags from the IAM server certificate. For more information about tagging, see Tagging IAM resources in the IAM User Guide. For certificates in a Region supported by Certificate Manager (ACM), we recommend that you don't use IAM server certificates. Instead, use ACM to provision, manage, and deploy your server certificates. For more information about IAM server certificates, Working with server certificates in the IAM User Guide.</td>
</tr>
<tr>
    <td><a href="#untag_user"><CopyableCode code="untag_user" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-UserName"><code>UserName</code></a>, <a href="#parameter-TagKeys"><code>TagKeys</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Removes the specified tags from the user. For more information about tagging, see Tagging IAM resources in the IAM User Guide.</td>
</tr>
<tr>
    <td><a href="#tag_instance_profile"><CopyableCode code="tag_instance_profile" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-InstanceProfileName"><code>InstanceProfileName</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-Tags"><code>Tags</code></a></td>
    <td>Adds one or more tags to an IAM instance profile. If a tag with the same key name already exists, then that tag is overwritten with the new value. Each tag consists of a key name and an associated value. By assigning tags to your resources, you can do the following: Administrative grouping and discovery - Attach tags to resources to aid in organization and search. For example, you could search for all resources with the key name Project and the value MyImportantProject. Or search for all resources with the key name Cost Center and the value 41200. Access control - Include tags in IAM user-based and resource-based policies. You can use tags to restrict access to only an IAM instance profile that has a specified tag attached. For examples of policies that show how to use tags to control access, see Control access using IAM tags in the IAM User Guide. If any one of the tags is invalid or if you exceed the allowed maximum number of tags, then the entire request fails and the resource is not created. For more information about tagging, see Tagging IAM resources in the IAM User Guide. Amazon Web Services always interprets the tag Value as a single string. If you need to store an array, you can store comma-separated values in the string. However, you must interpret the value in your code.</td>
</tr>
<tr>
    <td><a href="#tag_mfa_device"><CopyableCode code="tag_mfa_device" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-SerialNumber"><code>SerialNumber</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-Tags"><code>Tags</code></a></td>
    <td>Adds one or more tags to an IAM virtual multi-factor authentication (MFA) device. If a tag with the same key name already exists, then that tag is overwritten with the new value. A tag consists of a key name and an associated value. By assigning tags to your resources, you can do the following: Administrative grouping and discovery - Attach tags to resources to aid in organization and search. For example, you could search for all resources with the key name Project and the value MyImportantProject. Or search for all resources with the key name Cost Center and the value 41200. Access control - Include tags in IAM user-based and resource-based policies. You can use tags to restrict access to only an IAM virtual MFA device that has a specified tag attached. For examples of policies that show how to use tags to control access, see Control access using IAM tags in the IAM User Guide. If any one of the tags is invalid or if you exceed the allowed maximum number of tags, then the entire request fails and the resource is not created. For more information about tagging, see Tagging IAM resources in the IAM User Guide. Amazon Web Services always interprets the tag Value as a single string. If you need to store an array, you can store comma-separated values in the string. However, you must interpret the value in your code.</td>
</tr>
<tr>
    <td><a href="#tag_open_id_connect_provider"><CopyableCode code="tag_open_id_connect_provider" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-OpenIDConnectProviderArn"><code>OpenIDConnectProviderArn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-Tags"><code>Tags</code></a></td>
    <td>Adds one or more tags to an OpenID Connect (OIDC)-compatible identity provider. For more information about these providers, see About web identity federation. If a tag with the same key name already exists, then that tag is overwritten with the new value. A tag consists of a key name and an associated value. By assigning tags to your resources, you can do the following: Administrative grouping and discovery - Attach tags to resources to aid in organization and search. For example, you could search for all resources with the key name Project and the value MyImportantProject. Or search for all resources with the key name Cost Center and the value 41200. Access control - Include tags in IAM identity-based and resource-based policies. You can use tags to restrict access to only an OIDC provider that has a specified tag attached. For examples of policies that show how to use tags to control access, see Control access using IAM tags in the IAM User Guide. If any one of the tags is invalid or if you exceed the allowed maximum number of tags, then the entire request fails and the resource is not created. For more information about tagging, see Tagging IAM resources in the IAM User Guide. Amazon Web Services always interprets the tag Value as a single string. If you need to store an array, you can store comma-separated values in the string. However, you must interpret the value in your code.</td>
</tr>
<tr>
    <td><a href="#tag_policy"><CopyableCode code="tag_policy" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-PolicyArn"><code>PolicyArn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-Tags"><code>Tags</code></a></td>
    <td>Adds one or more tags to an IAM customer managed policy. If a tag with the same key name already exists, then that tag is overwritten with the new value. A tag consists of a key name and an associated value. By assigning tags to your resources, you can do the following: Administrative grouping and discovery - Attach tags to resources to aid in organization and search. For example, you could search for all resources with the key name Project and the value MyImportantProject. Or search for all resources with the key name Cost Center and the value 41200. Access control - Include tags in IAM user-based and resource-based policies. You can use tags to restrict access to only an IAM customer managed policy that has a specified tag attached. For examples of policies that show how to use tags to control access, see Control access using IAM tags in the IAM User Guide. If any one of the tags is invalid or if you exceed the allowed maximum number of tags, then the entire request fails and the resource is not created. For more information about tagging, see Tagging IAM resources in the IAM User Guide. Amazon Web Services always interprets the tag Value as a single string. If you need to store an array, you can store comma-separated values in the string. However, you must interpret the value in your code.</td>
</tr>
<tr>
    <td><a href="#tag_role"><CopyableCode code="tag_role" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-RoleName"><code>RoleName</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-Tags"><code>Tags</code></a></td>
    <td>Adds one or more tags to an IAM role. The role can be a regular role or a service-linked role. If a tag with the same key name already exists, then that tag is overwritten with the new value. A tag consists of a key name and an associated value. By assigning tags to your resources, you can do the following: Administrative grouping and discovery - Attach tags to resources to aid in organization and search. For example, you could search for all resources with the key name Project and the value MyImportantProject. Or search for all resources with the key name Cost Center and the value 41200. Access control - Include tags in IAM user-based and resource-based policies. You can use tags to restrict access to only an IAM role that has a specified tag attached. You can also restrict access to only those resources that have a certain tag attached. For examples of policies that show how to use tags to control access, see Control access using IAM tags in the IAM User Guide. Cost allocation - Use tags to help track which individuals and teams are using which Amazon Web Services resources. If any one of the tags is invalid or if you exceed the allowed maximum number of tags, then the entire request fails and the resource is not created. For more information about tagging, see Tagging IAM resources in the IAM User Guide. Amazon Web Services always interprets the tag Value as a single string. If you need to store an array, you can store comma-separated values in the string. However, you must interpret the value in your code. For more information about tagging, see Tagging IAM identities in the IAM User Guide.</td>
</tr>
<tr>
    <td><a href="#tag_saml_provider"><CopyableCode code="tag_saml_provider" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-SAMLProviderArn"><code>SAMLProviderArn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-Tags"><code>Tags</code></a></td>
    <td>Adds one or more tags to a Security Assertion Markup Language (SAML) identity provider. For more information about these providers, see About SAML 2.0-based federation . If a tag with the same key name already exists, then that tag is overwritten with the new value. A tag consists of a key name and an associated value. By assigning tags to your resources, you can do the following: Administrative grouping and discovery - Attach tags to resources to aid in organization and search. For example, you could search for all resources with the key name Project and the value MyImportantProject. Or search for all resources with the key name Cost Center and the value 41200. Access control - Include tags in IAM user-based and resource-based policies. You can use tags to restrict access to only a SAML identity provider that has a specified tag attached. For examples of policies that show how to use tags to control access, see Control access using IAM tags in the IAM User Guide. If any one of the tags is invalid or if you exceed the allowed maximum number of tags, then the entire request fails and the resource is not created. For more information about tagging, see Tagging IAM resources in the IAM User Guide. Amazon Web Services always interprets the tag Value as a single string. If you need to store an array, you can store comma-separated values in the string. However, you must interpret the value in your code.</td>
</tr>
<tr>
    <td><a href="#tag_server_certificate"><CopyableCode code="tag_server_certificate" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-ServerCertificateName"><code>ServerCertificateName</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-Tags"><code>Tags</code></a></td>
    <td>Adds one or more tags to an IAM server certificate. If a tag with the same key name already exists, then that tag is overwritten with the new value. For certificates in a Region supported by Certificate Manager (ACM), we recommend that you don't use IAM server certificates. Instead, use ACM to provision, manage, and deploy your server certificates. For more information about IAM server certificates, Working with server certificates in the IAM User Guide. A tag consists of a key name and an associated value. By assigning tags to your resources, you can do the following: Administrative grouping and discovery - Attach tags to resources to aid in organization and search. For example, you could search for all resources with the key name Project and the value MyImportantProject. Or search for all resources with the key name Cost Center and the value 41200. Access control - Include tags in IAM user-based and resource-based policies. You can use tags to restrict access to only a server certificate that has a specified tag attached. For examples of policies that show how to use tags to control access, see Control access using IAM tags in the IAM User Guide. Cost allocation - Use tags to help track which individuals and teams are using which Amazon Web Services resources. If any one of the tags is invalid or if you exceed the allowed maximum number of tags, then the entire request fails and the resource is not created. For more information about tagging, see Tagging IAM resources in the IAM User Guide. Amazon Web Services always interprets the tag Value as a single string. If you need to store an array, you can store comma-separated values in the string. However, you must interpret the value in your code.</td>
</tr>
<tr>
    <td><a href="#tag_user"><CopyableCode code="tag_user" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-UserName"><code>UserName</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-Tags"><code>Tags</code></a></td>
    <td>Adds one or more tags to an IAM user. If a tag with the same key name already exists, then that tag is overwritten with the new value. A tag consists of a key name and an associated value. By assigning tags to your resources, you can do the following: Administrative grouping and discovery - Attach tags to resources to aid in organization and search. For example, you could search for all resources with the key name Project and the value MyImportantProject. Or search for all resources with the key name Cost Center and the value 41200. Access control - Include tags in IAM identity-based and resource-based policies. You can use tags to restrict access to only an IAM requesting user that has a specified tag attached. You can also restrict access to only those resources that have a certain tag attached. For examples of policies that show how to use tags to control access, see Control access using IAM tags in the IAM User Guide. Cost allocation - Use tags to help track which individuals and teams are using which Amazon Web Services resources. If any one of the tags is invalid or if you exceed the allowed maximum number of tags, then the entire request fails and the resource is not created. For more information about tagging, see Tagging IAM resources in the IAM User Guide. Amazon Web Services always interprets the tag Value as a single string. If you need to store an array, you can store comma-separated values in the string. However, you must interpret the value in your code. For more information about tagging, see Tagging IAM identities in the IAM User Guide.</td>
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
<tr id="parameter-InstanceProfileName">
    <td><CopyableCode code="InstanceProfileName" /></td>
    <td><code>string</code></td>
    <td>The name of the IAM instance profile to which you want to add tags. This parameter allows (through its regex pattern) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: _+=,.@-</td>
</tr>
<tr id="parameter-OpenIDConnectProviderArn">
    <td><CopyableCode code="OpenIDConnectProviderArn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the OIDC identity provider in IAM to which you want to add tags. This parameter allows (through its regex pattern) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: _+=,.@-</td>
</tr>
<tr id="parameter-PolicyArn">
    <td><CopyableCode code="PolicyArn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the IAM customer managed policy to which you want to add tags. This parameter allows (through its regex pattern) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: _+=,.@-</td>
</tr>
<tr id="parameter-RoleName">
    <td><CopyableCode code="RoleName" /></td>
    <td><code>string</code></td>
    <td>The name of the IAM role to which you want to add tags. This parameter accepts (through its regex pattern) a string of characters that consist of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: _+=,.@-</td>
</tr>
<tr id="parameter-SAMLProviderArn">
    <td><CopyableCode code="SAMLProviderArn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the SAML identity provider in IAM to which you want to add tags. This parameter allows (through its regex pattern) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: _+=,.@-</td>
</tr>
<tr id="parameter-SerialNumber">
    <td><CopyableCode code="SerialNumber" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for the IAM virtual MFA device to which you want to add tags. For virtual MFA devices, the serial number is the same as the ARN. This parameter allows (through its regex pattern) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: _+=,.@-</td>
</tr>
<tr id="parameter-ServerCertificateName">
    <td><CopyableCode code="ServerCertificateName" /></td>
    <td><code>string</code></td>
    <td>The name of the IAM server certificate to which you want to add tags. This parameter allows (through its regex pattern) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: _+=,.@-</td>
</tr>
<tr id="parameter-TagKeys">
    <td><CopyableCode code="TagKeys" /></td>
    <td><code>array</code></td>
    <td>A list of key names as a simple array of strings. The tags with matching keys are removed from the specified user.</td>
</tr>
<tr id="parameter-UserName">
    <td><CopyableCode code="UserName" /></td>
    <td><code>string</code></td>
    <td>The name of the IAM user to which you want to add tags. This parameter allows (through its regex pattern) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: _+=,.@-</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-Tags">
    <td><CopyableCode code="Tags" /></td>
    <td><code>array</code></td>
    <td>The list of tags that you want to attach to the IAM user. Each tag consists of a key name and an associated value.</td>
</tr>
</tbody>
</table>

## `UPDATE` examples

<Tabs
    defaultValue="untag_instance_profile"
    values={[
        { label: 'untag_instance_profile', value: 'untag_instance_profile' },
        { label: 'untag_mfa_device', value: 'untag_mfa_device' },
        { label: 'untag_open_id_connect_provider', value: 'untag_open_id_connect_provider' },
        { label: 'untag_policy', value: 'untag_policy' },
        { label: 'untag_role', value: 'untag_role' },
        { label: 'untag_saml_provider', value: 'untag_saml_provider' },
        { label: 'untag_server_certificate', value: 'untag_server_certificate' },
        { label: 'untag_user', value: 'untag_user' },
        { label: 'tag_instance_profile', value: 'tag_instance_profile' },
        { label: 'tag_mfa_device', value: 'tag_mfa_device' },
        { label: 'tag_open_id_connect_provider', value: 'tag_open_id_connect_provider' },
        { label: 'tag_policy', value: 'tag_policy' },
        { label: 'tag_role', value: 'tag_role' },
        { label: 'tag_saml_provider', value: 'tag_saml_provider' },
        { label: 'tag_server_certificate', value: 'tag_server_certificate' },
        { label: 'tag_user', value: 'tag_user' }
    ]}
>
<TabItem value="untag_instance_profile">

Removes the specified tags from the IAM instance profile. For more information about tagging, see Tagging IAM resources in the IAM User Guide.

```sql
UPDATE aws.iam.tags
SET 
-- No updatable properties
WHERE 
InstanceProfileName = '{{ InstanceProfileName }}' --required
AND TagKeys = '{{ TagKeys }}' --required
AND region = '{{ region }}' --required;
```
</TabItem>
<TabItem value="untag_mfa_device">

Removes the specified tags from the IAM virtual multi-factor authentication (MFA) device. For more information about tagging, see Tagging IAM resources in the IAM User Guide.

```sql
UPDATE aws.iam.tags
SET 
-- No updatable properties
WHERE 
SerialNumber = '{{ SerialNumber }}' --required
AND TagKeys = '{{ TagKeys }}' --required
AND region = '{{ region }}' --required;
```
</TabItem>
<TabItem value="untag_open_id_connect_provider">

Removes the specified tags from the specified OpenID Connect (OIDC)-compatible identity provider in IAM. For more information about OIDC providers, see About web identity federation. For more information about tagging, see Tagging IAM resources in the IAM User Guide.

```sql
UPDATE aws.iam.tags
SET 
-- No updatable properties
WHERE 
OpenIDConnectProviderArn = '{{ OpenIDConnectProviderArn }}' --required
AND TagKeys = '{{ TagKeys }}' --required
AND region = '{{ region }}' --required;
```
</TabItem>
<TabItem value="untag_policy">

Removes the specified tags from the customer managed policy. For more information about tagging, see Tagging IAM resources in the IAM User Guide.

```sql
UPDATE aws.iam.tags
SET 
-- No updatable properties
WHERE 
PolicyArn = '{{ PolicyArn }}' --required
AND TagKeys = '{{ TagKeys }}' --required
AND region = '{{ region }}' --required;
```
</TabItem>
<TabItem value="untag_role">

Removes the specified tags from the role. For more information about tagging, see Tagging IAM resources in the IAM User Guide.

```sql
UPDATE aws.iam.tags
SET 
-- No updatable properties
WHERE 
RoleName = '{{ RoleName }}' --required
AND TagKeys = '{{ TagKeys }}' --required
AND region = '{{ region }}' --required;
```
</TabItem>
<TabItem value="untag_saml_provider">

Removes the specified tags from the specified Security Assertion Markup Language (SAML) identity provider in IAM. For more information about these providers, see About web identity federation. For more information about tagging, see Tagging IAM resources in the IAM User Guide.

```sql
UPDATE aws.iam.tags
SET 
-- No updatable properties
WHERE 
SAMLProviderArn = '{{ SAMLProviderArn }}' --required
AND TagKeys = '{{ TagKeys }}' --required
AND region = '{{ region }}' --required;
```
</TabItem>
<TabItem value="untag_server_certificate">

Removes the specified tags from the IAM server certificate. For more information about tagging, see Tagging IAM resources in the IAM User Guide. For certificates in a Region supported by Certificate Manager (ACM), we recommend that you don't use IAM server certificates. Instead, use ACM to provision, manage, and deploy your server certificates. For more information about IAM server certificates, Working with server certificates in the IAM User Guide.

```sql
UPDATE aws.iam.tags
SET 
-- No updatable properties
WHERE 
ServerCertificateName = '{{ ServerCertificateName }}' --required
AND TagKeys = '{{ TagKeys }}' --required
AND region = '{{ region }}' --required;
```
</TabItem>
<TabItem value="untag_user">

Removes the specified tags from the user. For more information about tagging, see Tagging IAM resources in the IAM User Guide.

```sql
UPDATE aws.iam.tags
SET 
-- No updatable properties
WHERE 
UserName = '{{ UserName }}' --required
AND TagKeys = '{{ TagKeys }}' --required
AND region = '{{ region }}' --required;
```
</TabItem>
<TabItem value="tag_instance_profile">

Adds one or more tags to an IAM instance profile. If a tag with the same key name already exists, then that tag is overwritten with the new value. Each tag consists of a key name and an associated value. By assigning tags to your resources, you can do the following: Administrative grouping and discovery - Attach tags to resources to aid in organization and search. For example, you could search for all resources with the key name Project and the value MyImportantProject. Or search for all resources with the key name Cost Center and the value 41200. Access control - Include tags in IAM user-based and resource-based policies. You can use tags to restrict access to only an IAM instance profile that has a specified tag attached. For examples of policies that show how to use tags to control access, see Control access using IAM tags in the IAM User Guide. If any one of the tags is invalid or if you exceed the allowed maximum number of tags, then the entire request fails and the resource is not created. For more information about tagging, see Tagging IAM resources in the IAM User Guide. Amazon Web Services always interprets the tag Value as a single string. If you need to store an array, you can store comma-separated values in the string. However, you must interpret the value in your code.

```sql
UPDATE aws.iam.tags
SET 
-- No updatable properties
WHERE 
InstanceProfileName = '{{ InstanceProfileName }}' --required
AND region = '{{ region }}' --required
AND Tags = '{{ Tags}}';
```
</TabItem>
<TabItem value="tag_mfa_device">

Adds one or more tags to an IAM virtual multi-factor authentication (MFA) device. If a tag with the same key name already exists, then that tag is overwritten with the new value. A tag consists of a key name and an associated value. By assigning tags to your resources, you can do the following: Administrative grouping and discovery - Attach tags to resources to aid in organization and search. For example, you could search for all resources with the key name Project and the value MyImportantProject. Or search for all resources with the key name Cost Center and the value 41200. Access control - Include tags in IAM user-based and resource-based policies. You can use tags to restrict access to only an IAM virtual MFA device that has a specified tag attached. For examples of policies that show how to use tags to control access, see Control access using IAM tags in the IAM User Guide. If any one of the tags is invalid or if you exceed the allowed maximum number of tags, then the entire request fails and the resource is not created. For more information about tagging, see Tagging IAM resources in the IAM User Guide. Amazon Web Services always interprets the tag Value as a single string. If you need to store an array, you can store comma-separated values in the string. However, you must interpret the value in your code.

```sql
UPDATE aws.iam.tags
SET 
-- No updatable properties
WHERE 
SerialNumber = '{{ SerialNumber }}' --required
AND region = '{{ region }}' --required
AND Tags = '{{ Tags}}';
```
</TabItem>
<TabItem value="tag_open_id_connect_provider">

Adds one or more tags to an OpenID Connect (OIDC)-compatible identity provider. For more information about these providers, see About web identity federation. If a tag with the same key name already exists, then that tag is overwritten with the new value. A tag consists of a key name and an associated value. By assigning tags to your resources, you can do the following: Administrative grouping and discovery - Attach tags to resources to aid in organization and search. For example, you could search for all resources with the key name Project and the value MyImportantProject. Or search for all resources with the key name Cost Center and the value 41200. Access control - Include tags in IAM identity-based and resource-based policies. You can use tags to restrict access to only an OIDC provider that has a specified tag attached. For examples of policies that show how to use tags to control access, see Control access using IAM tags in the IAM User Guide. If any one of the tags is invalid or if you exceed the allowed maximum number of tags, then the entire request fails and the resource is not created. For more information about tagging, see Tagging IAM resources in the IAM User Guide. Amazon Web Services always interprets the tag Value as a single string. If you need to store an array, you can store comma-separated values in the string. However, you must interpret the value in your code.

```sql
UPDATE aws.iam.tags
SET 
-- No updatable properties
WHERE 
OpenIDConnectProviderArn = '{{ OpenIDConnectProviderArn }}' --required
AND region = '{{ region }}' --required
AND Tags = '{{ Tags}}';
```
</TabItem>
<TabItem value="tag_policy">

Adds one or more tags to an IAM customer managed policy. If a tag with the same key name already exists, then that tag is overwritten with the new value. A tag consists of a key name and an associated value. By assigning tags to your resources, you can do the following: Administrative grouping and discovery - Attach tags to resources to aid in organization and search. For example, you could search for all resources with the key name Project and the value MyImportantProject. Or search for all resources with the key name Cost Center and the value 41200. Access control - Include tags in IAM user-based and resource-based policies. You can use tags to restrict access to only an IAM customer managed policy that has a specified tag attached. For examples of policies that show how to use tags to control access, see Control access using IAM tags in the IAM User Guide. If any one of the tags is invalid or if you exceed the allowed maximum number of tags, then the entire request fails and the resource is not created. For more information about tagging, see Tagging IAM resources in the IAM User Guide. Amazon Web Services always interprets the tag Value as a single string. If you need to store an array, you can store comma-separated values in the string. However, you must interpret the value in your code.

```sql
UPDATE aws.iam.tags
SET 
-- No updatable properties
WHERE 
PolicyArn = '{{ PolicyArn }}' --required
AND region = '{{ region }}' --required
AND Tags = '{{ Tags}}';
```
</TabItem>
<TabItem value="tag_role">

Adds one or more tags to an IAM role. The role can be a regular role or a service-linked role. If a tag with the same key name already exists, then that tag is overwritten with the new value. A tag consists of a key name and an associated value. By assigning tags to your resources, you can do the following: Administrative grouping and discovery - Attach tags to resources to aid in organization and search. For example, you could search for all resources with the key name Project and the value MyImportantProject. Or search for all resources with the key name Cost Center and the value 41200. Access control - Include tags in IAM user-based and resource-based policies. You can use tags to restrict access to only an IAM role that has a specified tag attached. You can also restrict access to only those resources that have a certain tag attached. For examples of policies that show how to use tags to control access, see Control access using IAM tags in the IAM User Guide. Cost allocation - Use tags to help track which individuals and teams are using which Amazon Web Services resources. If any one of the tags is invalid or if you exceed the allowed maximum number of tags, then the entire request fails and the resource is not created. For more information about tagging, see Tagging IAM resources in the IAM User Guide. Amazon Web Services always interprets the tag Value as a single string. If you need to store an array, you can store comma-separated values in the string. However, you must interpret the value in your code. For more information about tagging, see Tagging IAM identities in the IAM User Guide.

```sql
UPDATE aws.iam.tags
SET 
-- No updatable properties
WHERE 
RoleName = '{{ RoleName }}' --required
AND region = '{{ region }}' --required
AND Tags = '{{ Tags}}';
```
</TabItem>
<TabItem value="tag_saml_provider">

Adds one or more tags to a Security Assertion Markup Language (SAML) identity provider. For more information about these providers, see About SAML 2.0-based federation . If a tag with the same key name already exists, then that tag is overwritten with the new value. A tag consists of a key name and an associated value. By assigning tags to your resources, you can do the following: Administrative grouping and discovery - Attach tags to resources to aid in organization and search. For example, you could search for all resources with the key name Project and the value MyImportantProject. Or search for all resources with the key name Cost Center and the value 41200. Access control - Include tags in IAM user-based and resource-based policies. You can use tags to restrict access to only a SAML identity provider that has a specified tag attached. For examples of policies that show how to use tags to control access, see Control access using IAM tags in the IAM User Guide. If any one of the tags is invalid or if you exceed the allowed maximum number of tags, then the entire request fails and the resource is not created. For more information about tagging, see Tagging IAM resources in the IAM User Guide. Amazon Web Services always interprets the tag Value as a single string. If you need to store an array, you can store comma-separated values in the string. However, you must interpret the value in your code.

```sql
UPDATE aws.iam.tags
SET 
-- No updatable properties
WHERE 
SAMLProviderArn = '{{ SAMLProviderArn }}' --required
AND region = '{{ region }}' --required
AND Tags = '{{ Tags}}';
```
</TabItem>
<TabItem value="tag_server_certificate">

Adds one or more tags to an IAM server certificate. If a tag with the same key name already exists, then that tag is overwritten with the new value. For certificates in a Region supported by Certificate Manager (ACM), we recommend that you don't use IAM server certificates. Instead, use ACM to provision, manage, and deploy your server certificates. For more information about IAM server certificates, Working with server certificates in the IAM User Guide. A tag consists of a key name and an associated value. By assigning tags to your resources, you can do the following: Administrative grouping and discovery - Attach tags to resources to aid in organization and search. For example, you could search for all resources with the key name Project and the value MyImportantProject. Or search for all resources with the key name Cost Center and the value 41200. Access control - Include tags in IAM user-based and resource-based policies. You can use tags to restrict access to only a server certificate that has a specified tag attached. For examples of policies that show how to use tags to control access, see Control access using IAM tags in the IAM User Guide. Cost allocation - Use tags to help track which individuals and teams are using which Amazon Web Services resources. If any one of the tags is invalid or if you exceed the allowed maximum number of tags, then the entire request fails and the resource is not created. For more information about tagging, see Tagging IAM resources in the IAM User Guide. Amazon Web Services always interprets the tag Value as a single string. If you need to store an array, you can store comma-separated values in the string. However, you must interpret the value in your code.

```sql
UPDATE aws.iam.tags
SET 
-- No updatable properties
WHERE 
ServerCertificateName = '{{ ServerCertificateName }}' --required
AND region = '{{ region }}' --required
AND Tags = '{{ Tags}}';
```
</TabItem>
<TabItem value="tag_user">

Adds one or more tags to an IAM user. If a tag with the same key name already exists, then that tag is overwritten with the new value. A tag consists of a key name and an associated value. By assigning tags to your resources, you can do the following: Administrative grouping and discovery - Attach tags to resources to aid in organization and search. For example, you could search for all resources with the key name Project and the value MyImportantProject. Or search for all resources with the key name Cost Center and the value 41200. Access control - Include tags in IAM identity-based and resource-based policies. You can use tags to restrict access to only an IAM requesting user that has a specified tag attached. You can also restrict access to only those resources that have a certain tag attached. For examples of policies that show how to use tags to control access, see Control access using IAM tags in the IAM User Guide. Cost allocation - Use tags to help track which individuals and teams are using which Amazon Web Services resources. If any one of the tags is invalid or if you exceed the allowed maximum number of tags, then the entire request fails and the resource is not created. For more information about tagging, see Tagging IAM resources in the IAM User Guide. Amazon Web Services always interprets the tag Value as a single string. If you need to store an array, you can store comma-separated values in the string. However, you must interpret the value in your code. For more information about tagging, see Tagging IAM identities in the IAM User Guide.

```sql
UPDATE aws.iam.tags
SET 
-- No updatable properties
WHERE 
UserName = '{{ UserName }}' --required
AND region = '{{ region }}' --required
AND Tags = '{{ Tags}}';
```
</TabItem>
</Tabs>
