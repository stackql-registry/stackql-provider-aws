--- 
title: types
hide_title: false
hide_table_of_contents: false
keywords:
  - types
  - cloudformation
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

Creates, updates, deletes, gets or lists a <code>types</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="types" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.cloudformation.types" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_type"
    values={[
        { label: 'describe_type', value: 'describe_type' },
        { label: 'list_types', value: 'list_types' }
    ]}
>
<TabItem value="describe_type">

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
    <td><CopyableCode code="original_type_name" /></td>
    <td><code>string</code></td>
    <td>The type name of the public extension. If you specified a TypeNameAlias when enabling the extension in this account and Region, CloudFormation treats that alias as the extension's type name within the account and Region, not the type name of the public extension. For more information, see Use aliases to refer to extensions in the CloudFormation User Guide.</td>
</tr>
<tr>
    <td><CopyableCode code="publisher_id" /></td>
    <td><code>string</code></td>
    <td>The publisher ID of the extension publisher.</td>
</tr>
<tr>
    <td><CopyableCode code="supported_major_versions" /></td>
    <td><code>string</code></td>
    <td>A list of the major versions of the extension type that the macro supports.</td>
</tr>
<tr>
    <td><CopyableCode code="type_name_alias" /></td>
    <td><code>string</code></td>
    <td>An alias assigned to the public extension, in this account and Region. If you specify an alias for the extension, CloudFormation treats the alias as the extension type name within this account and Region. You must use the alias to refer to the extension in your templates, API calls, and CloudFormation console.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_types">

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
    <td><CopyableCode code="default_version_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the default version of the extension. The default version is used when the extension version isn't specified. This applies only to private extensions you have registered in your account. For public extensions, both those provided by Amazon and published by third parties, CloudFormation returns null. For more information, see RegisterType. To set the default version of an extension, use SetTypeDefaultVersion.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the extension.</td>
</tr>
<tr>
    <td><CopyableCode code="is_activated" /></td>
    <td><code>boolean</code></td>
    <td>Whether the extension is activated for this account and Region. This applies only to third-party public extensions. Extensions published by Amazon are activated by default.</td>
</tr>
<tr>
    <td><CopyableCode code="last_updated" /></td>
    <td><code>string</code></td>
    <td>When the specified extension version was registered. This applies only to: Private extensions you have registered in your account. For more information, see RegisterType. Public extensions you have activated in your account with auto-update specified. For more information, see ActivateType. For all other extension types, CloudFormation returns null.</td>
</tr>
<tr>
    <td><CopyableCode code="latest_public_version" /></td>
    <td><code>string</code></td>
    <td>For public extensions that have been activated for this account and Region, the latest version of the public extension that is available. For any extensions other than activated third-party extensions, CloudFormation returns null. How you specified AutoUpdate when enabling the extension affects whether CloudFormation automatically updates the extension in this account and Region when a new version is released. For more information, see Automatically use new versions of extensions in the CloudFormation User Guide.</td>
</tr>
<tr>
    <td><CopyableCode code="original_type_name" /></td>
    <td><code>string</code></td>
    <td>For public extensions that have been activated for this account and Region, the type name of the public extension. If you specified a TypeNameAlias when enabling the extension in this account and Region, CloudFormation treats that alias as the extension's type name within the account and Region, not the type name of the public extension. For more information, see Use aliases to refer to extensions in the CloudFormation User Guide.</td>
</tr>
<tr>
    <td><CopyableCode code="public_version_number" /></td>
    <td><code>string</code></td>
    <td>For public extensions that have been activated for this account and Region, the version of the public extension to be used for CloudFormation operations in this account and Region. How you specified AutoUpdate when enabling the extension affects whether CloudFormation automatically updates the extension in this account and Region when a new version is released. For more information, see Automatically use new versions of extensions in the CloudFormation User Guide.</td>
</tr>
<tr>
    <td><CopyableCode code="publisher_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the extension publisher, if the extension is published by a third party. Extensions published by Amazon don't return a publisher ID.</td>
</tr>
<tr>
    <td><CopyableCode code="publisher_identity" /></td>
    <td><code>string</code></td>
    <td>The service used to verify the publisher identity. For more information, see Publishing extensions to make them available for public use in the CloudFormation Command Line Interface (CLI) User Guide.</td>
</tr>
<tr>
    <td><CopyableCode code="publisher_name" /></td>
    <td><code>string</code></td>
    <td>The publisher name, as defined in the public profile for that publisher in the service used to verify the publisher identity.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The kind of extension.</td>
</tr>
<tr>
    <td><CopyableCode code="type_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the extension.</td>
</tr>
<tr>
    <td><CopyableCode code="type_name" /></td>
    <td><code>string</code></td>
    <td>The name of the extension. If you specified a TypeNameAlias when you call the ActivateType API operation in your account and Region, CloudFormation considers that alias as the type name.</td>
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
    <td><a href="#describe_type"><CopyableCode code="describe_type" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-TypeName"><code>TypeName</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-Type"><code>Type</code></a>, <a href="#parameter-Arn"><code>Arn</code></a>, <a href="#parameter-VersionId"><code>VersionId</code></a>, <a href="#parameter-PublisherId"><code>PublisherId</code></a>, <a href="#parameter-PublicVersionNumber"><code>PublicVersionNumber</code></a></td>
    <td>Returns detailed information about an extension from the CloudFormation registry in your current account and Region. If you specify a VersionId, DescribeType returns information about that specific extension version. Otherwise, it returns information about the default extension version. For more information, see Edit configuration data for extensions in your account in the CloudFormation User Guide.</td>
</tr>
<tr>
    <td><a href="#list_types"><CopyableCode code="list_types" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-Visibility"><code>Visibility</code></a>, <a href="#parameter-ProvisioningType"><code>ProvisioningType</code></a>, <a href="#parameter-DeprecatedStatus"><code>DeprecatedStatus</code></a>, <a href="#parameter-Type"><code>Type</code></a>, <a href="#parameter-Filters"><code>Filters</code></a>, <a href="#parameter-MaxResults"><code>MaxResults</code></a>, <a href="#parameter-NextToken"><code>NextToken</code></a></td>
    <td>Returns summary information about all extensions, including your private resource types, modules, and Hooks as well as all public extensions from Amazon Web Services and third-party publishers.</td>
</tr>
<tr>
    <td><a href="#register_type"><CopyableCode code="register_type" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-TypeName"><code>TypeName</code></a>, <a href="#parameter-SchemaHandlerPackage"><code>SchemaHandlerPackage</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-Type"><code>Type</code></a>, <a href="#parameter-LoggingConfig"><code>LoggingConfig</code></a>, <a href="#parameter-ExecutionRoleArn"><code>ExecutionRoleArn</code></a>, <a href="#parameter-ClientRequestToken"><code>ClientRequestToken</code></a></td>
    <td>Registers an extension with the CloudFormation service. Registering an extension makes it available for use in CloudFormation templates in your Amazon Web Services account, and includes: Validating the extension schema. Determining which handlers, if any, have been specified for the extension. Making the extension available for use in your account. For more information about how to develop extensions and ready them for registration, see Creating resource types using the CloudFormation CLI in the CloudFormation Command Line Interface (CLI) User Guide. You can have a maximum of 50 resource extension versions registered at a time. This maximum is per account and per Region. Use DeregisterType to deregister specific extension versions if necessary. Once you have initiated a registration request using RegisterType, you can use DescribeTypeRegistration to monitor the progress of the registration request. Once you have registered a private extension in your account and Region, use SetTypeConfiguration to specify configuration properties for the extension. For more information, see Edit configuration data for extensions in your account in the CloudFormation User Guide.</td>
</tr>
<tr>
    <td><a href="#set_type_configuration"><CopyableCode code="set_type_configuration" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-Configuration"><code>Configuration</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-TypeArn"><code>TypeArn</code></a>, <a href="#parameter-ConfigurationAlias"><code>ConfigurationAlias</code></a>, <a href="#parameter-TypeName"><code>TypeName</code></a>, <a href="#parameter-Type"><code>Type</code></a></td>
    <td>Specifies the configuration data for a CloudFormation extension, such as a resource or Hook, in the given account and Region. For more information, see Edit configuration data for extensions in your account in the CloudFormation User Guide. To view the current configuration data for an extension, refer to the ConfigurationSchema element of DescribeType. It's strongly recommended that you use dynamic references to restrict sensitive configuration definitions, such as third-party credentials. For more information, see Specify values stored in other services using dynamic references in the CloudFormation User Guide. For more information about setting the configuration data for resource types, see Defining the account-level configuration of an extension in the CloudFormation Command Line Interface (CLI) User Guide. For more information about setting the configuration data for Hooks, see the CloudFormation Hooks User Guide.</td>
</tr>
<tr>
    <td><a href="#set_type_default_version"><CopyableCode code="set_type_default_version" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-Arn"><code>Arn</code></a>, <a href="#parameter-Type"><code>Type</code></a>, <a href="#parameter-TypeName"><code>TypeName</code></a>, <a href="#parameter-VersionId"><code>VersionId</code></a></td>
    <td>Specify the default version of an extension. The default version of an extension will be used in CloudFormation operations.</td>
</tr>
<tr>
    <td><a href="#deregister_type"><CopyableCode code="deregister_type" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-Arn"><code>Arn</code></a>, <a href="#parameter-Type"><code>Type</code></a>, <a href="#parameter-TypeName"><code>TypeName</code></a>, <a href="#parameter-VersionId"><code>VersionId</code></a></td>
    <td>Marks an extension or extension version as DEPRECATED in the CloudFormation registry, removing it from active use. Deprecated extensions or extension versions cannot be used in CloudFormation operations. To deregister an entire extension, you must individually deregister all active versions of that extension. If an extension has only a single active version, deregistering that version results in the extension itself being deregistered and marked as deprecated in the registry. You can't deregister the default version of an extension if there are other active version of that extension. If you do deregister the default version of an extension, the extension type itself is deregistered as well and marked as deprecated. To view the deprecation status of an extension or extension version, use DescribeType. For more information, see Remove third-party private extensions from your account in the CloudFormation User Guide.</td>
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
<tr id="parameter-Configuration">
    <td><CopyableCode code="Configuration" /></td>
    <td><code>string</code></td>
    <td>The configuration data for the extension in this account and Region. The configuration data must be formatted as JSON and validate against the extension's schema returned in the Schema response element of DescribeType.</td>
</tr>
<tr id="parameter-SchemaHandlerPackage">
    <td><CopyableCode code="SchemaHandlerPackage" /></td>
    <td><code>string</code></td>
    <td>A URL to the S3 bucket that contains the extension project package that contains the necessary files for the extension you want to register. For information about generating a schema handler package for the extension you want to register, see submit in the CloudFormation Command Line Interface (CLI) User Guide. The user registering the extension must be able to access the package in the S3 bucket. That's, the user needs to have GetObject permissions for the schema handler package. For more information, see Actions, Resources, and Condition Keys for Amazon S3 in the Identity and Access Management User Guide.</td>
</tr>
<tr id="parameter-TypeName">
    <td><CopyableCode code="TypeName" /></td>
    <td><code>string</code></td>
    <td>The name of the extension being registered. We suggest that extension names adhere to the following patterns: For resource types, company_or_organization::service::type. For modules, company_or_organization::service::type::MODULE. For Hooks, MyCompany::Testing::MyTestHook. The following organization namespaces are reserved and can't be used in your extension names: Alexa AMZN Amazon AWS Custom Dev</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-Arn">
    <td><CopyableCode code="Arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the extension. Conditional: You must specify either TypeName and Type, or Arn.</td>
</tr>
<tr id="parameter-ClientRequestToken">
    <td><CopyableCode code="ClientRequestToken" /></td>
    <td><code>string</code></td>
    <td>A unique identifier that acts as an idempotency key for this registration request. Specifying a client request token prevents CloudFormation from generating more than one version of an extension from the same registration request, even if the request is submitted multiple times.</td>
</tr>
<tr id="parameter-ConfigurationAlias">
    <td><CopyableCode code="ConfigurationAlias" /></td>
    <td><code>string</code></td>
    <td>An alias by which to refer to this extension configuration data. Conditional: Specifying a configuration alias is required when setting a configuration for a resource type extension.</td>
</tr>
<tr id="parameter-DeprecatedStatus">
    <td><CopyableCode code="DeprecatedStatus" /></td>
    <td><code>string</code></td>
    <td>The deprecation status of the extension that you want to get summary information about. Valid values include: LIVE: The extension is registered for use in CloudFormation operations. DEPRECATED: The extension has been deregistered and can no longer be used in CloudFormation operations.</td>
</tr>
<tr id="parameter-ExecutionRoleArn">
    <td><CopyableCode code="ExecutionRoleArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the IAM role for CloudFormation to assume when invoking the extension. For CloudFormation to assume the specified execution role, the role must contain a trust relationship with the CloudFormation service principal (resources.cloudformation.amazonaws.com). For more information about adding trust relationships, see Modifying a role trust policy in the Identity and Access Management User Guide. If your extension calls Amazon Web Services APIs in any of its handlers, you must create an IAM execution role that includes the necessary permissions to call those Amazon Web Services APIs, and provision that execution role in your account. When CloudFormation needs to invoke the resource type handler, CloudFormation assumes this execution role to create a temporary session token, which it then passes to the resource type handler, thereby supplying your resource type with the appropriate credentials.</td>
</tr>
<tr id="parameter-Filters">
    <td><CopyableCode code="Filters" /></td>
    <td><code>object</code></td>
    <td>Filter criteria to use in determining which extensions to return. Filters must be compatible with Visibility to return valid results. For example, specifying AWS_TYPES for Category and PRIVATE for Visibility returns an empty list of types, but specifying PUBLIC for Visibility returns the desired list.</td>
</tr>
<tr id="parameter-LoggingConfig">
    <td><CopyableCode code="LoggingConfig" /></td>
    <td><code>object</code></td>
    <td>Specifies logging configuration information for an extension.</td>
</tr>
<tr id="parameter-MaxResults">
    <td><CopyableCode code="MaxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to be returned with a single call. If the number of available results exceeds this maximum, the response includes a NextToken value that you can assign to the NextToken request parameter to get the next set of results.</td>
</tr>
<tr id="parameter-NextToken">
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>The token for the next set of items to return. (You received this token from a previous call.)</td>
</tr>
<tr id="parameter-ProvisioningType">
    <td><CopyableCode code="ProvisioningType" /></td>
    <td><code>string</code></td>
    <td>For resource types, the provisioning behavior of the resource type. CloudFormation determines the provisioning type during registration, based on the types of handlers in the schema handler package submitted. Valid values include: FULLY_MUTABLE: The resource type includes an update handler to process updates to the type during stack update operations. IMMUTABLE: The resource type doesn't include an update handler, so the type can't be updated and must instead be replaced during stack update operations. NON_PROVISIONABLE: The resource type doesn't include create, read, and delete handlers, and therefore can't actually be provisioned. The default is FULLY_MUTABLE.</td>
</tr>
<tr id="parameter-PublicVersionNumber">
    <td><CopyableCode code="PublicVersionNumber" /></td>
    <td><code>string</code></td>
    <td>The version number of a public third-party extension.</td>
</tr>
<tr id="parameter-PublisherId">
    <td><CopyableCode code="PublisherId" /></td>
    <td><code>string</code></td>
    <td>The publisher ID of the extension publisher. Extensions provided by Amazon Web Services are not assigned a publisher ID.</td>
</tr>
<tr id="parameter-Type">
    <td><CopyableCode code="Type" /></td>
    <td><code>string</code></td>
    <td>The kind of extension. Conditional: You must specify either TypeName and Type, or Arn.</td>
</tr>
<tr id="parameter-TypeArn">
    <td><CopyableCode code="TypeArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) for the extension in this account and Region. For public extensions, this will be the ARN assigned when you call the ActivateType API operation in this account and Region. For private extensions, this will be the ARN assigned when you call the RegisterType API operation in this account and Region. Do not include the extension versions suffix at the end of the ARN. You can set the configuration for an extension, but not for a specific extension version.</td>
</tr>
<tr id="parameter-TypeName">
    <td><CopyableCode code="TypeName" /></td>
    <td><code>string</code></td>
    <td>The name of the extension. Conditional: You must specify either TypeName and Type, or Arn.</td>
</tr>
<tr id="parameter-VersionId">
    <td><CopyableCode code="VersionId" /></td>
    <td><code>string</code></td>
    <td>The ID of a specific version of the extension. The version ID is the value at the end of the Amazon Resource Name (ARN) assigned to the extension version when it is registered.</td>
</tr>
<tr id="parameter-Visibility">
    <td><CopyableCode code="Visibility" /></td>
    <td><code>string</code></td>
    <td>The scope at which the extensions are visible and usable in CloudFormation operations. Valid values include: PRIVATE: Extensions that are visible and usable within this account and Region. This includes: Private extensions you have registered in this account and Region. Public extensions that you have activated in this account and Region. PUBLIC: Extensions that are publicly visible and available to be activated within any Amazon Web Services account. This includes extensions from Amazon Web Services and third-party publishers. The default is PRIVATE.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_type"
    values={[
        { label: 'describe_type', value: 'describe_type' },
        { label: 'list_types', value: 'list_types' }
    ]}
>
<TabItem value="describe_type">

Returns detailed information about an extension from the CloudFormation registry in your current account and Region. If you specify a VersionId, DescribeType returns information about that specific extension version. Otherwise, it returns information about the default extension version. For more information, see Edit configuration data for extensions in your account in the CloudFormation User Guide.

```sql
SELECT
original_type_name,
publisher_id,
supported_major_versions,
type_name_alias
FROM aws.cloudformation.types
WHERE TypeName = '{{ TypeName }}' -- required
AND region = '{{ region }}' -- required
AND Type = '{{ Type }}'
AND Arn = '{{ Arn }}'
AND VersionId = '{{ VersionId }}'
AND PublisherId = '{{ PublisherId }}'
AND PublicVersionNumber = '{{ PublicVersionNumber }}'
;
```
</TabItem>
<TabItem value="list_types">

Returns summary information about all extensions, including your private resource types, modules, and Hooks as well as all public extensions from Amazon Web Services and third-party publishers.

```sql
SELECT
default_version_id,
description,
is_activated,
last_updated,
latest_public_version,
original_type_name,
public_version_number,
publisher_id,
publisher_identity,
publisher_name,
type,
type_arn,
type_name
FROM aws.cloudformation.types
WHERE region = '{{ region }}' -- required
AND Visibility = '{{ Visibility }}'
AND ProvisioningType = '{{ ProvisioningType }}'
AND DeprecatedStatus = '{{ DeprecatedStatus }}'
AND Type = '{{ Type }}'
AND Filters = '{{ Filters }}'
AND MaxResults = '{{ MaxResults }}'
AND NextToken = '{{ NextToken }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="register_type"
    values={[
        { label: 'register_type', value: 'register_type' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="register_type">

Registers an extension with the CloudFormation service. Registering an extension makes it available for use in CloudFormation templates in your Amazon Web Services account, and includes: Validating the extension schema. Determining which handlers, if any, have been specified for the extension. Making the extension available for use in your account. For more information about how to develop extensions and ready them for registration, see Creating resource types using the CloudFormation CLI in the CloudFormation Command Line Interface (CLI) User Guide. You can have a maximum of 50 resource extension versions registered at a time. This maximum is per account and per Region. Use DeregisterType to deregister specific extension versions if necessary. Once you have initiated a registration request using RegisterType, you can use DescribeTypeRegistration to monitor the progress of the registration request. Once you have registered a private extension in your account and Region, use SetTypeConfiguration to specify configuration properties for the extension. For more information, see Edit configuration data for extensions in your account in the CloudFormation User Guide.

```sql
INSERT INTO aws.cloudformation.types (
TypeName,
SchemaHandlerPackage,
region,
Type,
LoggingConfig,
ExecutionRoleArn,
ClientRequestToken
)
SELECT 
'{{ TypeName }}',
'{{ SchemaHandlerPackage }}',
'{{ region }}',
'{{ Type }}',
'{{ LoggingConfig }}',
'{{ ExecutionRoleArn }}',
'{{ ClientRequestToken }}'
RETURNING
line_items
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: types
  props:
    - name: TypeName
      value: "{{ TypeName }}"
      description: Required parameter for the types resource.
    - name: SchemaHandlerPackage
      value: "{{ SchemaHandlerPackage }}"
      description: Required parameter for the types resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the types resource.
    - name: Type
      value: "{{ Type }}"
      description: The kind of extension.
      description: The kind of extension.
    - name: LoggingConfig
      value: "{{ LoggingConfig }}"
      description: Specifies logging configuration information for an extension.
      description: Specifies logging configuration information for an extension.
    - name: ExecutionRoleArn
      value: "{{ ExecutionRoleArn }}"
      description: The Amazon Resource Name (ARN) of the IAM role for CloudFormation to assume when invoking the extension. For CloudFormation to assume the specified execution role, the role must contain a trust relationship with the CloudFormation service principal (resources.cloudformation.amazonaws.com). For more information about adding trust relationships, see Modifying a role trust policy in the Identity and Access Management User Guide. If your extension calls Amazon Web Services APIs in any of its handlers, you must create an IAM execution role that includes the necessary permissions to call those Amazon Web Services APIs, and provision that execution role in your account. When CloudFormation needs to invoke the resource type handler, CloudFormation assumes this execution role to create a temporary session token, which it then passes to the resource type handler, thereby supplying your resource type with the appropriate credentials.
      description: The Amazon Resource Name (ARN) of the IAM role for CloudFormation to assume when invoking the extension. For CloudFormation to assume the specified execution role, the role must contain a trust relationship with the CloudFormation service principal (resources.cloudformation.amazonaws.com). For more information about adding trust relationships, see Modifying a role trust policy in the Identity and Access Management User Guide. If your extension calls Amazon Web Services APIs in any of its handlers, you must create an IAM execution role that includes the necessary permissions to call those Amazon Web Services APIs, and provision that execution role in your account. When CloudFormation needs to invoke the resource type handler, CloudFormation assumes this execution role to create a temporary session token, which it then passes to the resource type handler, thereby supplying your resource type with the appropriate credentials.
    - name: ClientRequestToken
      value: "{{ ClientRequestToken }}"
      description: A unique identifier that acts as an idempotency key for this registration request. Specifying a client request token prevents CloudFormation from generating more than one version of an extension from the same registration request, even if the request is submitted multiple times.
      description: A unique identifier that acts as an idempotency key for this registration request. Specifying a client request token prevents CloudFormation from generating more than one version of an extension from the same registration request, even if the request is submitted multiple times.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="set_type_configuration"
    values={[
        { label: 'set_type_configuration', value: 'set_type_configuration' },
        { label: 'set_type_default_version', value: 'set_type_default_version' }
    ]}
>
<TabItem value="set_type_configuration">

Specifies the configuration data for a CloudFormation extension, such as a resource or Hook, in the given account and Region. For more information, see Edit configuration data for extensions in your account in the CloudFormation User Guide. To view the current configuration data for an extension, refer to the ConfigurationSchema element of DescribeType. It's strongly recommended that you use dynamic references to restrict sensitive configuration definitions, such as third-party credentials. For more information, see Specify values stored in other services using dynamic references in the CloudFormation User Guide. For more information about setting the configuration data for resource types, see Defining the account-level configuration of an extension in the CloudFormation Command Line Interface (CLI) User Guide. For more information about setting the configuration data for Hooks, see the CloudFormation Hooks User Guide.

```sql
UPDATE aws.cloudformation.types
SET 
-- No updatable properties
WHERE 
Configuration = '{{ Configuration }}' --required
AND region = '{{ region }}' --required
AND TypeArn = '{{ TypeArn}}'
AND ConfigurationAlias = '{{ ConfigurationAlias}}'
AND TypeName = '{{ TypeName}}'
AND Type = '{{ Type}}'
RETURNING
line_items;
```
</TabItem>
<TabItem value="set_type_default_version">

Specify the default version of an extension. The default version of an extension will be used in CloudFormation operations.

```sql
UPDATE aws.cloudformation.types
SET 
-- No updatable properties
WHERE 
region = '{{ region }}' --required
AND Arn = '{{ Arn}}'
AND Type = '{{ Type}}'
AND TypeName = '{{ TypeName}}'
AND VersionId = '{{ VersionId}}'
RETURNING
line_items;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="deregister_type"
    values={[
        { label: 'deregister_type', value: 'deregister_type' }
    ]}
>
<TabItem value="deregister_type">

Marks an extension or extension version as DEPRECATED in the CloudFormation registry, removing it from active use. Deprecated extensions or extension versions cannot be used in CloudFormation operations. To deregister an entire extension, you must individually deregister all active versions of that extension. If an extension has only a single active version, deregistering that version results in the extension itself being deregistered and marked as deprecated in the registry. You can't deregister the default version of an extension if there are other active version of that extension. If you do deregister the default version of an extension, the extension type itself is deregistered as well and marked as deprecated. To view the deprecation status of an extension or extension version, use DescribeType. For more information, see Remove third-party private extensions from your account in the CloudFormation User Guide.

```sql
DELETE FROM aws.cloudformation.types
WHERE region = '{{ region }}' --required
AND Arn = '{{ Arn }}'
AND Type = '{{ Type }}'
AND TypeName = '{{ TypeName }}'
AND VersionId = '{{ VersionId }}'
;
```
</TabItem>
</Tabs>
